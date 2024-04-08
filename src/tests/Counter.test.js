// import necessary react testing library helpers here
// import the Counter component here

// import dependencies
import React from 'react'

// import react-testing methods
import {render, fireEvent, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
});

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  // assert that counter message is rendered
  const counter = screen.getByText(/Counter/i);
  expect(counter).toBeInTheDocument();
});  


test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');

  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');

  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  expect(count).toHaveTextContent('-1');
});
