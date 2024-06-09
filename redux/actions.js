import { getDoctors, getPatients, getAppointments, addAppointment, updateAppointment, deleteAppointment } from '../utils/api';

export const SET_USER = 'SET_USER';
export const SET_DOCTORS = 'SET_DOCTORS';
export const SET_PATIENTS = 'SET_PATIENTS';
export const SET_APPOINTMENTS = 'SET_APPOINTMENTS';
export const ADD_APPOINTMENT = 'ADD_APPOINTMENT';
export const UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
export const SET_USER_ROLE = 'SET_USER_ROLE';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const fetchDoctors = () => async (dispatch) => {
  const doctors = await getDoctors();
  dispatch({ type: SET_DOCTORS, payload: doctors });
};

export const fetchPatients = () => async (dispatch) => {
  const patients = await getPatients();
  dispatch({ type: SET_PATIENTS, payload: patients });
};

export const fetchAppointments = () => async (dispatch) => {
  const appointments = await getAppointments();
  dispatch({ type: SET_APPOINTMENTS, payload: appointments });
};

export const createAppointment = (appointment) => async (dispatch) => {
  const newAppointment = await addAppointment(appointment);
  dispatch({ type: ADD_APPOINTMENT, payload: newAppointment });
};

export const modifyAppointment = (id, updatedAppointment) => async (dispatch) => {
  const updated = await updateAppointment(id, updatedAppointment);
  dispatch({ type: UPDATE_APPOINTMENT, payload: { id, updated } });
};

export const removeAppointment = (id) => async (dispatch) => {
  await deleteAppointment(id);
  dispatch({ type: DELETE_APPOINTMENT, payload: id });
};

export const setUserRole = (role) => ({
  type: SET_USER_ROLE,
  payload: role
});

export const fetchUserRole = () => async (dispatch) => {
  const user = auth().currentUser;
  if (user) {
    const idTokenResult = await user.getIdTokenResult();
    const role = idTokenResult.claims.role || 'user';
    dispatch(setUserRole(role));
  }
};