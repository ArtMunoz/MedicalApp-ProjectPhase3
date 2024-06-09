import 'react-native';
import React from 'react';
import DoctorProfile from './DoctorProfile';
import renderer from 'react-test-renderer';

const mockRoute = {
  params: {
    doctor: {
      name: 'Dr. John Doe',
      specialty: 'Cardiology',
      availability: '9 AM - 5 PM',
      contact: 'john.doe@example.com'
    }
  }
};

it('renders doctor profile correctly', () => {
  const tree = renderer.create(<DoctorProfile route={mockRoute} />).toJSON();
  expect(tree).toMatchSnapshot();
});
