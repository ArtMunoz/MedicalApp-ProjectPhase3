import 'react-native';
import React from 'react';
import MedicalHistory from './MedicalHistory';
import renderer from 'react-test-renderer';

const mockRoute = {
  params: {
    history: [
      { date: '2024-01-01', note: 'Check-up' },
      { date: '2024-02-01', note: 'Blood test' }
    ]
  }
};

it('renders medical history correctly', () => {
  const tree = renderer.create(<MedicalHistory route={mockRoute} />).toJSON();
  expect(tree).toMatchSnapshot();
});
