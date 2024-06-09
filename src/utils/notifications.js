import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getToken = async () => {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
  return token;
};

export const listenForNotifications = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    Alert.alert('Una notificación se ha abierto', JSON.stringify(remoteMessage));
  });

  messaging().getInitialNotification().then(remoteMessage => {
    if (remoteMessage) {
      Alert.alert('Una notificación abrió la app', JSON.stringify(remoteMessage));
    }
  });

  messaging().onMessage(async remoteMessage => {
    Alert.alert('Una nueva notificación ha llegado!', JSON.stringify(remoteMessage));
  });
};

const admin = require('firebase-admin');
const serviceAccount = require('path/to/your/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (token, message) => {
  const payload = {
    notification: {
      title: 'Recordatorio de Cita Médica',
      body: message,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(payload);
    console.log('Successfully sent message:', response);
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

module.exports = { sendNotification };
