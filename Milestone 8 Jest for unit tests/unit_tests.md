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

# Testing Redux with Jest

## What was the most challenging part of testing Redux?

- The most challenging part of testing Redux was dealing with the module system and making sure everything was properly set up to handle both import/export and require/module.exports. I ran into issues where Jest couldn’t parse the ESModules by default, which caused errors like "Cannot use import statement outside a module." To fix that, I had to convert everything to CommonJS (require/module.exports) for the tests to work properly.

Once that was sorted, I had to make sure the tests for both sync actions (like reducers) and async actions (like createAsyncThunk) were properly dispatched and handled in the store.

## How do Redux tests differ from React component tests?

- In Redux tests, pure functions like reducers and async logic such as thunks are tested, while React component tests focus on UI rendering and user interaction.
- Redux tests typically depend on tools like @reduxjs/toolkit, redux-mock-store, or configureStore, while React component tests rely on @testing-library/react and jest-dom for testing DOM APIs, React components, and hooks.
- The main difference lies in the dependencies: Redux tests don't require a DOM, especially for testing reducers, whereas React component tests require a DOM environment (like jsdom in Jest) for testing the visual output, behavior, and event handling of components.
- The tooling used in each case also differs, as Redux testing mainly involves state logic and updates, while React component testing is more focused on the interaction between the user and the UI.

# Mocking API Calls in Jest

## Why is it important to mock API calls in tests?

- Avoid network dependency:Real API calls can fail due to network issues, rate limits, or server downtime.
- Mocked tests run in milliseconds vs waiting on a real API.
- Mocks return the same response every time, making tests reliable and reproducible.
- We want to test our component’s logic, not the API’s behavior.
- Easily test responses like timeouts, errors, or invalid data.

## What are some common pitfalls when testing asynchronous code?

- Forgetting to await async functions. This leads to false positives or flaky tests. We should always await things like waitFor(), findBy..., or custom async functions.
- getByText fails immediately if the element isn’t present. Should use findByText or waitFor() instead for dynamic content.
- Not wrapping updates in act().React warns when state updates aren’t wrapped in act().
- Mock not behaving like the real function. The mock might return different data or throw unexpected errors if its not close to real-world behavior.
