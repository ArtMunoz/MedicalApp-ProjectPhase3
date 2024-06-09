import 'react-native';
import React from 'react';
import Settings from './Settings';
import renderer from 'react-test-renderer';

const mockNavigation = {
  navigate: jest.fn(),
  replace: jest.fn()
};

it('renders settings screen correctly', () => {
  const tree = renderer.create(<Settings navigation={mockNavigation} />).toJSON();
  expect(tree).toMatchSnapshot();
});
