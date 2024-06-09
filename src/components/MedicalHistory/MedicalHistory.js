import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalHistory = ({ route }) => {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      {history.map((entry, index) => (
        <View key={index} style={styles.entry}>
          <Text>{entry.date}: {entry.note}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  entry: { marginBottom: 10 }
});

export default MedicalHistory;
