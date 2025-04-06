import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function TodoDetail() {
  const { title, text, time, done } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💖 Todo Details 💖</Text>

      <View style={styles.card}>
        <Text style={styles.label}>📌 Title:</Text>
        <Text style={styles.value}>{title}</Text>

        <Text style={styles.label}>📝 Description:</Text>
        <Text style={styles.value}>{text}</Text>

        <Text style={styles.label}>⏰ Time:</Text>
        <Text style={styles.value}>{time}</Text>

        <Text style={styles.label}>📋 Status:</Text>
        <Text style={styles.value}>{done === 'true' ? '✅ Done' : '🕘 Open'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d81b60',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffcdd2',
    padding: 20,
    borderRadius: 16,
    width: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#880e4f',
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#4a148c',
    marginBottom: 10,
  },
});
