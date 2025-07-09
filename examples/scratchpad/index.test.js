import { test, expect, vi } from 'vitest';

const logSpy = vi.spyOn(console, 'log');

test('a super simple test', () => {
  console.log('hi there');

  expect(logSpy).toBeCalled();
  expect(logSpy).toBeCalledWith('hi there');
  expect(logSpy).toHaveBeenCalledOnce();
  expect(logSpy).toBeCalledTimes(1);
});
