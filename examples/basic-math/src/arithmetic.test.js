import { describe, it, expect } from 'vitest';
import { add, divide, multiply, subtract } from './arithmetic';

describe('add', () => {
  it('should add 2 postive numbers', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('subtract', () => {
  it('should substract 2 postive numbers', () => {
    expect(subtract(6, 1)).toBe(5);
  });
});

describe('multiply', () => {
  it('should multiply 2 postive numbers', () => {
    expect(multiply(2, 9)).toBe(18);
  });
});

describe('divide', () => {
  it('should divide 2 postive numbers', () => {
    expect(divide(15, 3)).toBe(5);
  });
});
