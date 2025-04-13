// This is a test file for the getUserAge function.
const getUserAge = require('./function');

describe('getUserAge', () => {
  test('should return age as a string with two decimal places', () => {
    const user = { age: 25 };
    expect(getUserAge(user)).toBe('25.00');
  });

  test('should throw error if user is not an object', () => {
    expect(() => getUserAge(null)).toThrow('Invalid user object');
    expect(() => getUserAge([])).toThrow('Invalid user object');
  });

  test('should throw error if age is not a number', () => {
    const userWithInvalidAge = { age: 'not a number' };
    expect(() => getUserAge(userWithInvalidAge)).toThrow(
      'Age must be a valid number'
    );
    const userWithoutAge = {};
    expect(() => getUserAge(userWithoutAge)).toThrow(
      'Age must be a valid number'
    );
  });

  test('should throw error if user object is missing age property', () => {
    const userWithoutAge = {};
    expect(() => getUserAge(userWithoutAge)).toThrow(
      'Age must be a valid number'
    );
  });

  test('should throw error if age is NaN', () => {
    const user = { age: NaN };
    expect(() => getUserAge(user)).toThrow('Age must be a valid number');
  });

  test('should handle zero as a valid age', () => {
    const user = { age: 0 };
    expect(getUserAge(user)).toBe('0.00');
  });

  test('should handle negative age values', () => {
    const user = { age: -10 };
    expect(getUserAge(user)).toBe('-10.00');
  });
});
