import { addZero, butcherAlgorithm, getFormattedDate } from '../dateUtils';

describe('getFormattedDate method', () => {
  test('should return the date formatted correctly', () => {
    expect(getFormattedDate(1984, 12, 1)).toEqual('1984-12-01');
  });

  test('should return Invalid type error if any value is a string', () => {
    expect(() => { getFormattedDate('hi', 11, 12); }).toThrowError('Invalid type');
    expect(() => { getFormattedDate(1984, 'hi', 12); }).toThrowError('Invalid type');
    expect(() => { getFormattedDate(1984, 11, 'hi'); }).toThrowError('Invalid type');
  })
});

describe('addZero method', () => {
  test('should return Invalid type error if a string is passed', () => {
    expect(() => { addZero('hello'); }).toThrowError('Invalid type');
  });

  test('should return Invalid value error if a negative value is passed', () => {
    expect(() => { addZero(-1); }).toThrowError('Invalid value: -1');
  })

  test('should return Invalid value error if a float value is passed', () => {
    expect(() => { addZero(0.1); }).toThrowError('Invalid value: 0.1');
    expect(() => { addZero(-0.1); }).toThrowError('Invalid value: -0.1');
  })

  test('should return the value correctly', () => {
    expect(addZero(1)).toEqual('01');
    expect(addZero(10)).toEqual('10');
  })
});

describe('butcherAlgorithm  method', () => {
  test('should return the value correctly', () => {
    expect(butcherAlgorithm(1970)).toEqual('1970-03-29');
  });
});
