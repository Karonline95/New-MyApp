import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_COUNTRIES} from '../../graphql/countries';

const renderItem = ({item}: any) => {
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};

const List = () => {
  const {data, loading} = useQuery(GET_COUNTRIES, {
    fetchPolicy: 'no-cache',
  });
  console.log('data = ', data);

  const countries = data?.countries || [];

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в список!</Text>
      <FlatList data={countries} renderItem={renderItem} />
    </View>
  );
};

export default List;

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
