import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CountriesCapital = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Столицы</Text>
    </View>
  );
};

export default CountriesCapital;

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
