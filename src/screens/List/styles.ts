import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  flatlist: {
    width: '100%',
  },
  errorText: {
    color: 'red',
  },
  itemContainer: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemId: {
    fontWeight: 'bold',
    paddingRight: 5,
  },
});
