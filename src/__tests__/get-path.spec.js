import { describe, expect, test } from 'vitest'
import getPath from "../get-path";

describe('getPath tests', () => {
  test('same path - different order of arrays check', () => {
    const path = [
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Paris', destination: 'London'},
      {source: 'London', destination: 'Amsterdam'}
    ];
    expect(getPath(path)).toBe('Paris, London, Amsterdam, Berlin');

    const path2 = [
      {source: 'Paris', destination: 'London'},
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'London', destination: 'Amsterdam'}
    ];
    expect(getPath(path2)).toBe('Paris, London, Amsterdam, Berlin');

    const path3 = [
      {source: 'London', destination: 'Amsterdam'},
      {source: 'Paris', destination: 'London'},
      {source: 'Amsterdam', destination: 'Berlin'},
    ];
    expect(getPath(path3)).toBe('Paris, London, Amsterdam, Berlin');
  })

  test('big path check', () => {
    const path = [
      {source: 'London', destination: 'Amsterdam'},
      {source: 'Paris', destination: 'London'},
      {source: 'Amsterdam', destination: 'Berlin'},
      {source: 'Sydney', destination: 'New Plymouth'},
      {source: 'Phuket', destination: 'New York'},
      {source: 'Belgrade', destination: 'Phuket'},
      {source: 'New York', destination: 'Sydney'},
      {source: 'Berlin', destination: 'Belgrade'},
    ];
    expect(getPath(path)).toBe('Paris, London, Amsterdam, Berlin, Belgrade, Phuket, New York, Sydney, New Plymouth');
  })

  test('empty & one route check', () => {
    const path = [];
    expect(getPath(path)).toBe('');

    const path2 = [
      {source: 'Paris', destination: 'London'},
    ];
    expect(getPath(path2)).toBe('Paris, London');
  })

  test('broken route', () => {
    const path = [
      {source: 'Paris', destination: 'London'},
      {source: 'Amsterdam', destination: 'Berlin'},
    ];
    expect(getPath(path)).toBe('');
  })
})

