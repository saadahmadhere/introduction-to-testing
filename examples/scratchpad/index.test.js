import { test, expect, vi } from 'vitest';

// const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  const mockFn = vi.fn();
  mockFn('hi there');

  expect(mockFn).toBeCalled();
  expect(mockFn).toBeCalledWith('hi there');
  expect(mockFn).toHaveBeenCalledOnce();
  expect(mockFn).toBeCalledTimes(1);
});
