# Understanding Clean code Principles

## Example of a messy code

function sumEvenNumbers(numbers) {
return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbersArray));

## Its difficult to read because of:

- Poor naming: x, y, z don’t describe their purpose.
- No proper spacing or indentation
  -Inefficient structure: Could use reduce().

# Cleaner and more structured

- function sumEvenNumbers(numbers) {
  return numbers.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
  }

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(numbersArray));

# Code Formatting & Style Guides

## Why is code formatting important?

- Well-formatted code is easier to read and understand, making it simpler to follow logic and debug issues.
- Consistent formatting ensures that all team members write code in a similar style, reducing confusion and increasing collaboration.
- Helps in maintainability.
- Proper indentation and spacing help in identifying syntax errors or logical issues, reducing bugs.

## What issues did the linter detect?

In the code Ive named as 'Eslint_Prettier_Testcode.js', it detected that

- 'unusedVar' is assigned a value but never used
- 'userGreeting' is assigned a value but never used
- 'user.name' is missing in props validation

## Did formatting the code make it easier to read?

Yes it made the code more readable by fixing issues like one line functions.

# Naming Variables & Functions

## What makes a good variable or function name?

## What issues can arise from poorly named variables?

## How did refactoring improve code readability?
