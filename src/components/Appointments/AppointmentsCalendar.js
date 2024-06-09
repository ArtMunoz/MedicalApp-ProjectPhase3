import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Alert, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar } from 'react-native-calendars';
import AppointmentForm from './AppointmentForm';
import { fetchAppointments, createAppointment, modifyAppointment, removeAppointment } from '../../redux/actions';

const AppointmentsCalendar = () => {
  const dispatch = useDispatch();
  const appointments = useSelector(state => state.appointments);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  const handleDayPress = (day) => {
    setSelectedAppointment({ date: day.dateString });
    setModalVisible(true);
  };

  const handleSubmit = (appointment) => {
    if (selectedAppointment && selectedAppointment.id) {
      dispatch(modifyAppointment(selectedAppointment.id, appointment));
    } else {
      dispatch(createAppointment(appointment));
    }
    setModalVisible(false);
  };

  const handleEdit = (appointment) => {
    setSelectedAppointment(appointment);
    setModalVisible(true);
  };

  const handleDelete = (appointmentId) => {
    Alert.alert(
      'Eliminar Cita',
      '¿Estás seguro de que deseas eliminar esta cita?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Eliminar', onPress: () => dispatch(removeAppointment(appointmentId)) }
      ]
    );
  };

  const markedDates = appointments.reduce((acc, appointment) => {
    acc[appointment.date] = { marked: true };
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={markedDates}
        onDayPress={handleDayPress}
        theme={{
          selectedDayBackgroundColor: '#00adf5',
          todayTextColor: '#00adf5',
          arrowColor: 'orange',
          monthTextColor: 'blue'
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AppointmentForm
          initialValues={selectedAppointment}
          onSubmit={handleSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <ScrollView style={styles.appointmentList}>
        {appointments.map(appointment => (
          <View key={appointment.id} style={styles.appointment}>
            <Text>{appointment.date} - {appointment.doctor} - {appointment.patient}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Editar" onPress={() => handleEdit(appointment)} />
              <Button title="Eliminar" onPress={() => handleDelete(appointment.id)} />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  appointmentList: { marginTop: 20 },
  appointment: { padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10, backgroundColor: '#fff', borderRadius: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});

export default AppointmentsCalendar;

