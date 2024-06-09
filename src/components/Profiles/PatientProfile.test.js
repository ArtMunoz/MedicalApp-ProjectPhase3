import 'react-native';
import React from 'react';
import PatientProfile from './PatientProfile';
import renderer from 'react-test-renderer';

const mockRoute = {
  params: {
    patient: {
      name: 'Jane Doe',
      medicalHistory: 'Hypertension, Diabetes',
      currentMedications: 'Metformin, Lisinopril',
      allergies: 'Peanuts'
    }
  }
};

it('renders patient profile correctly', () => {
  const tree = renderer.create(<PatientProfile route={mockRoute} />).toJSON();
  expect(tree).toMatchSnapshot();
});
