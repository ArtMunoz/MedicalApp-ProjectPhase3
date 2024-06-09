import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store';
import SplashScreen from './components/Splash/SplashScreen';
import LoginScreen from './components/Login/LoginScreen';
import HomeScreen from './components/Home/HomeScreen';
import DoctorProfile from './components/Profiles/DoctorProfile';
import PatientProfile from './components/Profiles/PatientProfile';
import MedicalHistory from './components/MedicalHistory/MedicalHistory';
import ChatScreen from './components/Chat/ChatScreen';
import Notifications from './components/Notifications/Notifications';
import Settings from './components/Settings/Settings';
import AppointmentsCalendar from './components/Appointments/AppointmentsCalendar';
import ManualNotificationScreen from './components/Notifications/ManualNotificationScreen';
import UserManagementScreen from './components/Admin/UserManagementScreen';
import ReportGenerationScreen from './components/Admin/ReportGenerationScreen';
import { requestUserPermission, getToken, listenForNotifications } from './utils/notifications';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    requestUserPermission();
    getToken();
    listenForNotifications();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="DoctorProfile" component={DoctorProfile} />
          <Stack.Screen name="PatientProfile" component={PatientProfile} />
          <Stack.Screen name="MedicalHistory" component={MedicalHistory} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Appointments" component={AppointmentsCalendar} />
          <Stack.Screen name="ManualNotification" component={ManualNotificationScreen} />
          <Stack.Screen name="UserManagement" component={UserManagementScreen} />
          <Stack.Screen name="ReportGeneration" component={ReportGenerationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
