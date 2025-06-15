import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeTabs} from '../Tabs/Tabs';
import {TabsEnum} from '../../constants';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName={TabsEnum.HOME_TABS}>
      <Stack.Screen
        name={TabsEnum.HOME_TABS}
        component={HomeTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
