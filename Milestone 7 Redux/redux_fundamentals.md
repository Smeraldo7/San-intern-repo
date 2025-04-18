# Introduction to Redux Toolkit (State Management)

## When should you use Redux instead of useState?

- Use Redux when:

  - State is shared across many components
  - Complex app logic or global state needed
  - we need a single source of truth
  - Medium/large apps with deep component trees.
  - Eg:User authentication (login state), Cart management in e-commerce, Global notifications, Theme or language settings.

- Use useState when:
  - State is local to one component
  - Simple UI interactions (e.g., form inputs, toggles).
  - No need to persist or sync state globally.
  - Small-scale apps.
  - Eg usage: Toggling modals, Managing form inputs, Tab navigation, Small local counters

# Using Selectors in Redux Toolkit

## What are the benefits of using selectors instead of directly accessing state?

- Encapsulation & Reusability:Selectors hide how state is structured.
  And we can reuse selectors across components without duplicating logic. (eg: Instead of writing state.counter.value everywhere, we can use selectCounterValue(state))

- If the shape of the state changes, we only update the selector — not every component using the state.
- Selectors give meaningful names to pieces of state.
- Selectors are pure functions so its easy to unit test in isolation.
- With libraries like Reselect, we can create memoized selectors to avoid unnecessary recalculations and re-renders.
