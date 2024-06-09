import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DoctorProfile = ({ route }) => {
  const { doctorId } = route.params;
  const doctor = useSelector(state => state.doctors.find(d => d.id === doctorId));

  if (!doctor) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Doctor no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{doctor.name}</Text>
      <Text>Especialidad: {doctor.specialty}</Text>
      <Text>Disponibilidad: {doctor.availability}</Text>
      <Text>Contacto: {doctor.contact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});

export default DoctorProfile;
