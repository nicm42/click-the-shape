/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte'
import Closest from './Closest.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Closest, {shapes: shapes, scores: scores});
  expect(screen.getByText('1.2')).toBeInTheDocument();
  expect(screen.getByText('1.8')).toBeInTheDocument();
  expect(screen.queryByText('3.0')).not.toBeInTheDocument();
  expect(screen.getByRole('button', {name: /Clear scores/i})).toBeInTheDocument();
})

test('Shapes are all there', () => {
  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Closest, {shapes: shapes, scores: scores});
  expect(screen.getByTestId('circle')).toBeInTheDocument();
  expect(screen.getByTestId('square')).toBeInTheDocument();
  expect(screen.getByTestId('triangle')).toBeInTheDocument();
})

test('Local storage is cleared on button click', () => {  
  // Mock window.confirm
  let confirmSpy;
  confirmSpy = jest.spyOn(window, 'confirm');
  confirmSpy.mockImplementation(jest.fn(() => true));

  // First need to add to localStorage to check it's been cleared
  localStorage.setItem('Circle', 1.2);
  localStorage.setItem('Square', 1.8);
  localStorage.setItem('Triangle', 2.0);

  const shapes = ['Circle', 'Square', 'Triangle'];
  const scores = {'Circle': 1.2, 'Square': 1.8, 'Triangle': 3.0};
  render(Closest, {shapes: shapes, scores: scores});
  fireEvent.click(screen.getByRole('button', {name: /Clear scores/i}));
  expect(confirmSpy).toBeCalledWith('Are you sure you want to clear the closest scores?');
  expect(localStorage.getItem('Circle')).toBeFalsy;
  expect(localStorage.getItem('Square')).toBeFalsy;
  expect(localStorage.getItem('Triangle')).toBeFalsy;
})