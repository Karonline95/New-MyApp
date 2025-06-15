import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CountriesCapital from './Tabs/CountriesCapital';
import CountriesCurrency from './Tabs/CountriesCurrency';

const TopTab = createMaterialTopTabNavigator();

const Countries = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'green'},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarActiveTintColor: 'green',
        tabBarLabelStyle: {fontWeight: 'bold'},
      }}>
      <TopTab.Screen name="Столицы" component={CountriesCapital} />
      <TopTab.Screen name="Валюта" component={CountriesCurrency} />
    </TopTab.Navigator>
  );
};

export default Countries;

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const Countries = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Добро пожаловать в каталог!</Text>
//     </View>
//   );
// };

// export default Countries;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '600',
//     marginBottom: 20,
//   },
// });
