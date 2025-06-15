import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ScreensEnum} from '../../constants';

const Home = () => {
  const navigation = useNavigation();
  console.log('Hello!');
  useEffect(() => {
    console.log('Home screen mounted');
  }, []);

  const handlePressCountries = () => {
    console.log('Button pressed!');
    navigation.navigate(ScreensEnum.COUNTRIES);
  };

  const handlePressList = () => {
    console.log('Button pressed!');
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
