import 'react-native';
import React from 'react';
import AppointmentsCalendar from './AppointmentsCalendar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialState = {
  appointments: [
    { id: '1', date: '2024-06-09', doctor: 'Dr. John', patient: 'Jane Doe', description: 'Consulta general' }
  ]
};

const store = mockStore(initialState);

it('renders appointments calendar correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <AppointmentsCalendar />
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
