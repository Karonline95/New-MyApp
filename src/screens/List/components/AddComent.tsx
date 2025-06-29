import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {styles} from './AddComment.styles';
import useAddComment from '../hooks/useAddComment';

const AddComment = () => {
  const {
    name,
    email,
    body,
    isEmailValid,
    btnDisabled,
    deleteBtnEnabled,
    handleNameChange,
    handleEmailChange,
    handleBodyChange,
    handleAddComment,
    handleDeleteComment,
  } = useAddComment();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Имя"
        placeholderTextColor="#000000"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={handleEmailChange}
      />
      {email.length > 0 && !isEmailValid && (
        <Text style={styles.errorText}>Введите корректный email</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Комментарий"
        placeholderTextColor="#000000"
        value={body}
        onChangeText={handleBodyChange}
      />
      <View style={[styles.button, btnDisabled && styles.buttonDisabled]}>
        <Button
          title="Добавить комментарий"
          onPress={handleAddComment}
          color={'#fff'}
          disabled={btnDisabled}
        />
      </View>
      <View style={[styles.button, !deleteBtnEnabled && styles.buttonDisabled]}>
        <Button
          title="Удалить комментарий"
          onPress={handleDeleteComment}
          color={'#fff'}
          disabled={!deleteBtnEnabled}
        />
      </View>
    </View>
  );
};

export default AddComment;
