/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/svelte';
import Select from './Select.svelte';

test('Text is all there', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  expect(screen.getByText('Select a shape')).toBeInTheDocument();
  expect(screen.getByText('Circle')).toBeInTheDocument();
  expect(screen.getByText('Heart')).toBeInTheDocument();
  expect(screen.getByText('Hexagon')).toBeInTheDocument();
  expect(screen.getByText('Star')).toBeInTheDocument();
  expect(screen.getByText('Square')).toBeInTheDocument();
  expect(screen.getByText('Triangle')).toBeInTheDocument();
});

test('Select a shape" is selected to start with', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  // For some reason it doesn't like .selected unless it's any. So it'll have to be any
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeTruthy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a circle', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Circle' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeTruthy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a heart', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Heart' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeTruthy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a hexagon', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Hexagon' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeTruthy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a star', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Star' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeTruthy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a square', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Square' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square).toBeTruthy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeFalsy();
});

test('The selected option changes when you select a triangle', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Triangle' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
  const Circle = screen.getByText('Circle') as any;
  expect(Circle.selected).toBeFalsy();
  const Heart = screen.getByText('Heart') as any;
  expect(Heart.selected).toBeFalsy();
  const Hexagon = screen.getByText('Hexagon') as any;
  expect(Hexagon.selected).toBeFalsy();
  const Star = screen.getByText('Star') as any;
  expect(Star.selected).toBeFalsy();
  const Square = screen.getByText('Square') as any;
  expect(Square.selected).toBeFalsy();
  const Triangle = screen.getByText('Triangle') as any;
  expect(Triangle.selected).toBeTruthy();
});

test('"Select a shape" is not selectable', () => {
  const shapes = ['Circle', 'Heart', 'Hexagon', 'Star', 'Square', 'Triangle'];
  render(Select, {
    shapes: shapes,
    selectedShape: 'shape',
    isReset: false,
    initialSize: 100,
  });
  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Select a shape' },
  });
  const selectAShape = screen.getByText('Select a shape') as any;
  expect(selectAShape.selected).toBeFalsy();
});
