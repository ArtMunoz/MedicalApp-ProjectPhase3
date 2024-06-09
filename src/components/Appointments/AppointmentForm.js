import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AppointmentForm = ({ onSubmit, initialValues = {} }) => {
  const [date, setDate] = useState(initialValues.date || new Date());
  const [doctor, setDoctor] = useState(initialValues.doctor || '');
  const [patient, setPatient] = useState(initialValues.patient || '');
  const [description, setDescription] = useState(initialValues.description || '');

  const handleSubmit = () => {
    if (!doctor || !patient || !description) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }
    onSubmit({ date, doctor, patient, description });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Doctor</Text>
      <TextInput
        style={styles.input}
        value={doctor}
        onChangeText={setDoctor}
        placeholder="Doctor"
      />
      <Text style={styles.label}>Paciente</Text>
      <TextInput
        style={styles.input}
        value={patient}
        onChangeText={setPatient}
        placeholder="Paciente"
      />
      <Text style={styles.label}>Descripción</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Descripción"
      />
      <Text style={styles.label}>Fecha</Text>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || date;
          setDate(currentDate);
        }}
      />
      <Button title="Guardar Cita" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, marginBottom: 12, padding: 8, backgroundColor: '#fff' },
  datePicker: { marginBottom: 12, width: '100%' },
  buttonContainer: { marginTop: 20 }
});

export default AppointmentForm;
