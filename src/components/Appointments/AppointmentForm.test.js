import 'react-native';
import React from 'react';
import AppointmentForm from './AppointmentForm';
import renderer from 'react-test-renderer';

const mockSubmit = jest.fn();

it('renders appointment form correctly', () => {
  const tree = renderer.create(<AppointmentForm onSubmit={mockSubmit} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('submits form with correct data', () => {
  const tree = renderer.create(<AppointmentForm onSubmit={mockSubmit} />).root;
  
  tree.findByProps({ placeholder: 'Doctor' }).props.onChangeText('Dr. John');
  tree.findByProps({ placeholder: 'Paciente' }).props.onChangeText('Jane Doe');
  tree.findByProps({ placeholder: 'Descripción' }).props.onChangeText('Consulta general');
  tree.findByType('Button').props.onPress();
  
  expect(mockSubmit).toHaveBeenCalledWith({
    date: expect.any(Date),
    doctor: 'Dr. John',
    patient: 'Jane Doe',
    description: 'Consulta general'
  });
});
