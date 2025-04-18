import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageComponent from './MessageComponent';

test('renders the initial message', () => {
  render(<MessageComponent />);
  expect(screen.getByText('Hello, Focus bear!')).toBeInTheDocument();
});

test('updates the message when button is clicked', () => {
  render(<MessageComponent />);
  fireEvent.click(screen.getByText('Click me'));
  expect(screen.getByText('Button was clicked!')).toBeInTheDocument();
});
