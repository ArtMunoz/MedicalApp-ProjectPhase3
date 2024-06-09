import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointments, fetchDoctors, fetchPatients } from '../../redux/actions';
import { fetchUserRole } from '../../redux/actions';

const ReportGenerationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const userRole = useSelector(state => state.userRole);
  const appointments = useSelector(state => state.appointments);
  const doctors = useSelector(state => state.doctors);
  const patients = useSelector(state => state.patients);

  useEffect(() => {
    dispatch(fetchUserRole());
    dispatch(fetchAppointments());
    dispatch(fetchDoctors());
    dispatch(fetchPatients());
  }, [dispatch]);

  useEffect(() => {
    if (appointments.length && doctors.length && patients.length) {
      generateReports();
      setLoading(false);
    }
  }, [appointments, doctors, patients]);

  if (userRole !== 'admin') {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Acceso denegado. Esta página es solo para administradores.</Text>
        <Button title="Volver" onPress={() => navigation.navigate('Home')} />
      </View>
    );
  }

  const generateReports = () => {
    const doctorReports = doctors.map(doctor => ({
      type: 'Doctor',
      name: doctor.name,
      appointments: appointments.filter(appt => appt.doctor === doctor.name).length
    }));

    const patientReports = patients.map(patient => ({
      type: 'Paciente',
      name: patient.name,
      appointments: appointments.filter(appt => appt.patient === patient.name).length
    }));

    setReports([...doctorReports, ...patientReports]);
  };

  const renderReportItem = ({ item }) => (
    <View style={styles.reportContainer}>
      <Text>{item.type}: {item.name}</Text>
      <Text>Citas: {item.appointments}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={reports}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderReportItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  reportContainer: { padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 10, backgroundColor: '#fff', borderRadius: 5 },
  error: { fontSize: 18, color: 'red', textAlign: 'center', marginBottom: 20 }
});

export default ReportGenerationScreen;
