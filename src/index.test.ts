import { test, expect } from 'vitest';
import { collect } from './index';

test('map', () => {
  const actual = collect([1, 2, 3, 4, 5])
    .map((v: number) => v * 2)
    .toArray();
  const expected = [2, 4, 6, 8, 10];

  expect(actual).toStrictEqual(expected);
});
