import {Linking} from 'react-native';
import {ScreensEnum, TabsEnum} from '../../constants';
import {RootStackParamList} from '../../types/navigation';
import {LinkingOptions} from '@react-navigation/native';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['newmyapp://'],
  // Custom function to get the URL which was used to open the app
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    return url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener: (url: string) => void) {
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });

    return () => {
      linkingSubscription.remove();
    };
  },

  config: {
    screens: {
      [TabsEnum.HOME_TABS]: {
        screens: {
          [ScreensEnum.HOME]: 'test',
          [ScreensEnum.COUNTRIES]: 'test1',
          [ScreensEnum.LIST]: 'test2',
        },
      },
    },
  },
};
