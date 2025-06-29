import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Countries from '../../screens/Countries';
import List from '../../screens/List';
import Home from '../../screens/Home';
import {HomeTabsParamList} from '../../types/navigation';
import {ScreensEnum} from '../../constants';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

export const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName={ScreensEnum.HOME}>
      <Tab.Screen name={ScreensEnum.HOME} component={Home} />
      <Tab.Screen name={ScreensEnum.COUNTRIES} component={Countries} />
      <Tab.Screen name={ScreensEnum.LIST} component={List} />
    </Tab.Navigator>
  );
};
