import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchDoctors, fetchPatients, fetchAppointments } from '../../redux/actions';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchPatients());
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú Principal</Text>
      <Button title="Administrar Citas" onPress={() => navigation.navigate('Appointments')} />
      <Button title="Ver Perfiles" onPress={() => navigation.navigate('Profiles')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});

export default HomeScreen;
