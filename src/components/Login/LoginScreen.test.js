import 'react-native';
import React from 'react';
import LoginScreen from './LoginScreen';
import renderer from 'react-test-renderer';

it('renders login screen correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
