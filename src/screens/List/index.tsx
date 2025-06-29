import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {styles} from './styles';
import useList from './hooks/useList';
import AddComment from './components/AddComent';

const renderItem = ({item}: any) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemId}>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
};

const List = () => {
  const {comments, loading, error, refetch, loadMore} = useList();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    console.log('GRAPHQL ERROR = ', error);
    return <Text style={styles.errorText}>Ошибка: {error.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать в список!</Text>
      <AddComment />
      <FlatList
        style={styles.flatlist}
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item, index) =>
          item.id ? `${item.id}-${index}` : String(index)
        }
        onEndReachedThreshold={0.2}
        refreshing={false}
        onRefresh={refetch}
        onEndReached={loadMore}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default List;
