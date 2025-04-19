/**
 * @jest-environment jsdom
 */
const React = require('react');
const { render, screen, fireEvent } = require('@testing-library/react');
require('@testing-library/jest-dom');
const MessageComponent = require('./MessageComponent');

test('renders the initial message', () => {
  render(React.createElement(MessageComponent));
  expect(screen.getByText('Hello, Focus bear!')).toBeInTheDocument();
});

test('updates the message when button is clicked', () => {
  render(React.createElement(MessageComponent));
  fireEvent.click(screen.getByText('Click me'));
  expect(screen.getByText('Button was clicked!')).toBeInTheDocument();
});
