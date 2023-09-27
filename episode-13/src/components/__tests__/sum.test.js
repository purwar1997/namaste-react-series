import { sum } from '../sum';

test('Sum of two numbers', () => {
  const result = sum(5, 10);

  //  Assertion
  expect(result).toBe(15);
});
