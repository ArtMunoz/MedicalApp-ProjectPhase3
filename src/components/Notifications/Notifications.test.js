import 'react-native';
import React from 'react';
import Notifications from './Notifications';
import renderer from 'react-test-renderer';

const mockNotifications = [
  { text: 'Your appointment is scheduled for tomorrow.' },
  { text: 'Don’t forget to take your medication.' }
];

it('renders notifications correctly', () => {
  const tree = renderer.create(<Notifications notifications={mockNotifications} />).toJSON();
  expect(tree).toMatchSnapshot();
});
