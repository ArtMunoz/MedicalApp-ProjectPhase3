import 'react-native';
import React from 'react';
import ChatScreen from './ChatScreen';
import renderer from 'react-test-renderer';

const mockMessages = [
  { sender: 'Doctor', text: 'Hello, how are you?' },
  { sender: 'Patient', text: 'I am fine, thank you!' }
];

const mockSendMessage = jest.fn();

it('renders chat screen correctly', () => {
  const tree = renderer.create(<ChatScreen messages={mockMessages} sendMessage={mockSendMessage} />).toJSON();
  expect(tree).toMatchSnapshot();
});
