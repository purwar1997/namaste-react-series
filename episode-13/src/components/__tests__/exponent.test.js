import { exponent } from '../exponent';

test('5 raised to the power of 3', () => {
  const result = exponent(5, 3);

  // Assertion
  expect(result).toBe(125);
});
