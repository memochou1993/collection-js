import { test, expect } from 'vitest';
import { reduce } from './index';

test('reduce should work', () => {
  const actual = reduce([1, 2, 3, 4, 5], (pre: number, cur: number) => pre + cur);
  const expected = 15;

  expect(actual).toStrictEqual(expected);
});

test('reduce should work with initial value', () => {
  const actual = reduce([1, 2, 3, 4, 5], (pre: number, cur: number) => pre + cur, 10);
  const expected = 25;

  expect(actual).toStrictEqual(expected);
});
