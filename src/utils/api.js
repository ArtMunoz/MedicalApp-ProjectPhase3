import axios from 'axios';
import firestore from '@react-native-firebase/firestore';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
});

export const fetchUsers = async () => {
  const snapshot = await firestore().collection('users').get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const updateUserRole = async (userId, role) => {
  const userRef = firestore().collection('users').doc(userId);
  await userRef.update({ role });
  const user = await userRef.get();
  return { id: user.id, ...user.data() };
};

export const deleteUser = async (userId) => {
  await firestore().collection('users').doc(userId).delete();
};

export const getDoctors = async () => {
  const snapshot = await firestore().collection('doctors').get();
  return snapshot.docs.map(doc => doc.data());
};

export const getPatients = async () => {
  const snapshot = await firestore().collection('patients').get();
  return snapshot.docs.map(doc => doc.data());
};

export const getAppointments = async () => {
  const snapshot = await firestore().collection('appointments').get();
  return snapshot.docs.map(doc => doc.data());
};

export const addAppointment = async (appointment) => {
  return await firestore().collection('appointments').add(appointment);
};

export const updateAppointment = async (id, updatedAppointment) => {
  return await firestore().collection('appointments').doc(id).update(updatedAppointment);
};

export const deleteAppointment = async (id) => {
  return await firestore().collection('appointments').doc(id).delete();
};

export const sendNotification = async (token, message) => {
  try {
    const response = await api.post('/sendNotification', { token, message });
    return response.data;
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error;
  }
};

export default api;
