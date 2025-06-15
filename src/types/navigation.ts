import {ScreensEnum, TabsEnum} from '../constants';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeTabsParamList {}
  }
}

export type HomeTabsParamList = {
  [ScreensEnum.HOME]: undefined;
  [ScreensEnum.COUNTRIES]: undefined;
  [ScreensEnum.LIST]: undefined;
};

export type RootStackParamList = {
  [TabsEnum.HOME_TABS]: undefined;
};
