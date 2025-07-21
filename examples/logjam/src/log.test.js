import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    beforeEach(() => {
      vi.stubEnv('MODE', 'development');
    });

    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');
      console.log('hi');
      expect(logSpy).toHaveBeenCalledWith('hi');
    });

    afterEach(() => {
      // vi.unstubAllEnvs();
      vi.restoreAllMocks(); // according to the lecture.
    });
  });
  describe.todo('prod', () => {});
});
