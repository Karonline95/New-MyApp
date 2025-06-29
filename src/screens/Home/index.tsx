import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ScreensEnum} from '../../constants';

const Home = () => {
  const navigation = useNavigation();

  const handlePressCountries = () => {
    navigation.navigate(ScreensEnum.COUNTRIES);
  };

  const handlePressList = () => {
    navigation.navigate(ScreensEnum.LIST);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать домой!</Text>
      <Button title="В каталог" onPress={handlePressCountries} />
      <Button title="В список" onPress={handlePressList} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
});
