import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Notifications = ({ notifications }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  notification: { padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }
});

export default Notifications;
