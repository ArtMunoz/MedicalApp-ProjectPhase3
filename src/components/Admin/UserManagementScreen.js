import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, updateUserRole, deleteUser } from '../../utils/api';
import { fetchUserRole } from '../../redux/actions';

const UserManagementScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userRole = useSelector(state => state.userRole);

  useEffect(() => {
    dispatch(fetchUserRole());
    loadUsers();
  }, [dispatch]);

  const loadUsers = async () => {
    setLoading(true);
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
    setLoading(false);
  };

  if (userRole !== 'admin') {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Acceso denegado. Esta página es solo para administradores.</Text>
        <Button title="Volver" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  const handleUpdateRole = async (userId, role) => {
    if (role !== 'admin' && role !== 'user') {
      Alert.alert('Error', 'Rol no válido.');
      return;
    }

    setLoading(true);
    try {
      await updateUserRole(userId, role);
      Alert.alert('Éxito', 'Rol del usuario actualizado con éxito.');
      loadUsers();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar el rol del usuario.');
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    Alert.alert(
      'Eliminar Usuario',
      '¿Estás seguro de que deseas eliminar este usuario?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: async () => {
          setLoading(true);
          try {
            await deleteUser(userId);
            Alert.alert('Éxito', 'Usuario eliminado con éxito.');
            loadUsers();
          } catch (error) {
            console.error(error);
            Alert.alert('Error', 'No se pudo eliminar el usuario.');
            setLoading(false);
          }
        }}
      ]
    );
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text>{item.name} ({item.email}) - {item.role}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Hacer Admin" onPress={() => handleUpdateRole(item.id, 'admin')} />
        <Button title="Hacer Usuario" onPress={() => handleUpdateRole(item.id, 'user')} />
        <Button title="Eliminar" onPress={() => handleDeleteUser(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={user => user.id}
          renderItem={renderUserItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  userContainer: { padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10, backgroundColor: '#fff', borderRadius: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  error: { fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 20 }
});

export default UserManagementScreen;
