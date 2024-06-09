import { combineReducers } from 'redux';
import { SET_USER, SET_DOCTORS, SET_PATIENTS, SET_APPOINTMENTS, ADD_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT, SET_USER_ROLE } from './actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

const doctorsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

const patientsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_PATIENTS:
      return action.payload;
    default:
      return state;
  }
};

const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_APPOINTMENTS:
      return action.payload;
    case ADD_APPOINTMENT:
      return [...state, action.payload];
    case UPDATE_APPOINTMENT:
      return state.map(appointment => appointment.id === action.payload.id ? action.payload.updated : appointment);
    case DELETE_APPOINTMENT:
      return state.filter(appointment => appointment.id !== action.payload);
    default:
      return state;
  }
};

const userRoleReducer = (state = 'user', action) => {
  switch (action.type) {
    case SET_USER_ROLE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  doctors: doctorsReducer,
  patients: patientsReducer,
  appointments: appointmentsReducer
});
