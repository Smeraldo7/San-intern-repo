# Introduction to Unit Testing with Jest

## Why is automated testing important in software development?

- It eliminates the human factor of forgetting to test certain scenarios, providing a consistent approach to validating the code.
- Automated tests can be run as part of your Continuous Integration (CI) pipeline, providing quick feedback on whether the code works after changes.
- Once written, tests can be executed repeatedly without extra effort. This saves developers time compared to manually testing each scenario.
- Writing automated tests encourages developers to write cleaner, more modular code, as tests usually require well-structured code.
- With a good suite of tests, we can refactor our code with confidence, knowing that the tests will alert us if something breaks.

## What did you find challenging when writing your first Jest test?

- Setting up Jest initially was a bit tricky, especially ensuring that it worked with Babel for ES6+ syntax and React. Handling Jest configurations, such as test environment setup and transformations, took some time to get right.

# Testing React Components with Jest & React Testing Library

## What are the benefits of using React Testing Library instead of testing implementation details?

- RTL focuses on testing the component from the user's perspective — what they see and interact with — not how it's implemented.
- Tests aren't tightly coupled to component internals (like state or class names), so they’re less likely to break with refactors.
- Since RTL promotes accessible selectors (getByRole, getByLabelText), it naturally leads to more accessible UIs.

## What challenges did you encounter when simulating user interaction?

- Choosing the right query 'getByText' was a bit tricky because I had to experiment with other queries like getByRole or getByTestId to make the test more stable and user-like.
