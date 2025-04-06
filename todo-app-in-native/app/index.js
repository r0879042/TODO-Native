// app/index.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>💖 My React Native ToDo App 💖</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/CreateTodo">
          <Text style={styles.buttonText}>➕ Create New Todo</Text>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href='/TodoOverview'>
          <Text style={styles.buttonText}>📋 View Todos</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fffafc' },
  heading: { fontSize: 26, fontWeight: 'bold', color: '#d63384', marginBottom: 20 },
  button: {
    backgroundColor: '#f8d7e8',
    padding: 12,
    borderRadius: 12,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
    shadowColor: '#d63384',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
  buttonText: { color: '#b03060', fontSize: 16, fontWeight: '600' },
});
