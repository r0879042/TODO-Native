// /screens/CreateTodo.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateTodo({ route, navigation }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [time, setTime] = useState('');

  const { setTodos, todos } = route.params;

  const addTodo = () => {
    const newTodo = { title, text, time, done: false };
    setTodos([...todos, newTodo]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💖 New Todo 💖</Text>

      <TextInput placeholder= "Title " style={styles.input} onChangeText={setTitle} value={title} />
      <TextInput placeholder="Details" style={styles.input} onChangeText={setText} value={text} />
      <TextInput placeholder="Time (yyyy-mm-dd hh:mm)" style={styles.input} onChangeText={setTime} value={time} />

      <Button title="Save Todo" onPress={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff0f6' },
  heading: { fontSize: 22, marginBottom: 15, textAlign: 'center', color: '#c2185b' },
  input: { padding: 10, borderColor: '#d81b60', borderWidth: 1, marginBottom: 10, borderRadius: 8, backgroundColor: '#fff' },
});
