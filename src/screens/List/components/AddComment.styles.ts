import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'green',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    opacity: 1,
  },
  buttonDisabled: {
    opacity: 0.8,
  },
});
