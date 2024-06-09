import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../utils/api';
import { fetchUserRole } from '../../redux/actions';

const ManualNotificationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const users = useSelector(state => [...state.doctors, ...state.patients]);
  const [selectedUser, setSelectedUser] = useState(null);
  const userRole = useSelector(state => state.userRole);

  useEffect(() => {
    dispatch(fetchUserRole());
  }, [dispatch]);

  if (userRole !== 'admin') {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Acceso denegado. Esta página es solo para administradores.</Text>
        <Button title="Volver" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  const handleSendNotification = async () => {
    if (!message || !selectedUser) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    try {
      await sendNotification(selectedUser.token, message);
      Alert.alert('Éxito', 'Notificación enviada con éxito.');
      setMessage('');
      setSelectedUser(null);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo enviar la notificación.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Mensaje de la Notificación</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Escribe el mensaje..."
      />
      <Text style={styles.label}>Seleccionar Usuario</Text>
      {users.map(user => (
        <View key={user.id} style={styles.userContainer}>
          <Button
            title={user.name}
            onPress={() => setSelectedUser(user)}
            color={selectedUser?.id === user.id ? 'blue' : 'gray'}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Enviar Notificación" onPress={handleSendNotification} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 12, padding: 8, backgroundColor: '#fff' },
  userContainer: { marginBottom: 10 },
  buttonContainer: { marginTop: 20 },
  error: { fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 20 }
});

export default ManualNotificationScreen;
