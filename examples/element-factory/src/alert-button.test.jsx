import { vi } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it.skip('should render an alert button', async () => {});

  it('should trigger an alert', async () => {
    render(<AlertButton />);

    const alertspy = vi.spyOn(window, 'alert');

    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, 'hello');

      await userEvent.click(button);

      console.log(alertspy);

      expect(alertspy).toHaveBeenCalled();
      expect(alertspy).toHaveBeenCalledTimes(1);
      expect(alertspy).toHaveBeenCalledWith('hello');
    });
  });
});
