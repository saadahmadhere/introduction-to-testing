import { screen, fireEvent } from '@testing-library/dom';
import { createButton } from './button.js';

describe('createButton', () => {
  it('should create a button element', () => {
    document.body.appendChild(createButton());
    const button = screen.getByRole('button', { name: 'Click Me' });

    expect(button).toBeInTheDocument();
  });

  it('should have the text "Click Me"', () => {
    const button = createButton();
    expect(button.textContent).toBe('Click Me');
  });

  it('should change the text to "Clicked!" when clicked', async () => {
    const button = screen.getByRole('button', { name: 'Click Me' });
    fireEvent(button, new MouseEvent('click'));
  });
});
