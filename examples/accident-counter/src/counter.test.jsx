import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  let counter;
  let decrementButton;
  let incrementButton;
  let resetButton;
  let unit;

  beforeEach(() => {
    render(<Counter />);
    counter = screen.getByTestId('counter-count');
    unit = screen.getByTestId('counter-unit');
    decrementButton = screen.getByRole('button', { name: /decrement/i });
    incrementButton = screen.getByRole('button', { name: /increment/i });
    resetButton = screen.getByRole('button', { name: /reset/i });
  });

  it('renders with an initial count of 0', () => {
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    expect(unit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    await userEvent.click(incrementButton);
    expect(counter).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    await userEvent.click(incrementButton);
    expect(unit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    await userEvent.click(incrementButton);
    expect(counter).toHaveTextContent('1');
    await userEvent.click(decrementButton);
    expect(counter).toHaveTextContent('0');
  });

  it('does not allow decrementing below 0', async () => {
    expect(counter).toHaveTextContent('0');
    await act(async () => {
      // this makes sure to be for a render cycle to be completed, like if we hit an api, and wait for the response to come and dom to be repainted before we can test for the events. (act is not required here, added just for understading.)
      await userEvent.click(decrementButton);
    });
    expect(counter).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    await userEvent.click(incrementButton);
    expect(counter).toHaveTextContent('3');
    await userEvent.click(resetButton);
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    expect(counter).toHaveTextContent('0');
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('updates the document title based on the count', async () => {
    await userEvent.click(incrementButton);
    let newCount = '1';
    expect(counter).toHaveTextContent(newCount);
    expect(document.title).toContain(newCount);
    // expect(document.title).toBe('1 day — Accident Counter');
  });
});
