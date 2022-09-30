import { test, expect } from 'vitest';
import { collect } from './index';

test('map should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .map((v: number) => v * 2)
    .toArray();
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});

test('filter should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .filter((v: number) => v < 3)
    .toArray();
  const expected = [1, 2];

  expect(actual).toStrictEqual(expected);
});

test('reduce should work', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .reduce((pre: number, cur: number) => pre + cur, 20);
  const expected = 35;

  expect(actual).toStrictEqual(expected);
});
