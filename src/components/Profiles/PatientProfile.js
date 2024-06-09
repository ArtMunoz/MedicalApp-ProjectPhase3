import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PatientProfile = ({ route }) => {
  const { patientId } = route.params;
  const patient = useSelector(state => state.patients.find(p => p.id === patientId));

  if (!patient) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Paciente no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{patient.name}</Text>
      <Text>Historial Médico: {patient.medicalHistory}</Text>
      <Text>Medicamentos Actuales: {patient.currentMedications}</Text>
      <Text>Alergias: {patient.allergies}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});

export default PatientProfile;
