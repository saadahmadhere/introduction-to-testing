import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from './counter';

import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });
    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days');
  });

  it.todo(
    'increments the count when the "Increment" button is clicked',
    async () => {},
  );

  it.todo('displays "day" when the count is 1', async () => {});

  it.todo(
    'decrements the count when the "Decrement" button is clicked',
    async () => {},
  );

  it.todo('does not allow decrementing below 0', async () => {});

  it.todo(
    'resets the count when the "Reset" button is clicked',
    async () => {},
  );

  it.todo(
    'disables the "Decrement" and "Reset" buttons when the count is 0',
    () => {},
  );

  it.todo('updates the document title based on the count', async () => {});
});
