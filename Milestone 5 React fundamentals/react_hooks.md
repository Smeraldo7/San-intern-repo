# Understanding React Hooks: useEffect

## When should you use useEffect instead of handling logic inside event handlers?

- When we want to run code in response to component lifecycle changes or external changes, like:

  - On component mount eg:Fetch data when the component first loads
  - On unmount eg: Clean up a timer or a subscription
  - When a value changes eg:Do something whenever a specific state or prop updates

-We use event handlers when we only need to respond to direct user actions, like button click, form input, mouse/keyboard interactions.

## What happens if you don’t provide a dependency array?

- If we don’t provide a dependency array in useEffect, the effect will run after every single render, including re-renders caused by state or prop changes.

- Example:

useEffect(() => {}) -after every render
useEffect(() => {}, []) -only once (on mount)
useEffect(() => {}, [count]) -when count changes

## How can improper use of useEffect cause performance issues?

- Running on every render unnecessarily.
- Creating infinite loops:If the effect changes state but is also triggered by that state.
  eg:

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  setCount(count + 1); // This causes a re-render
}, [count]);
```

count changes → triggers useEffect → changes count again → repeat

- Not cleaning up:if we use effects like event listeners, intervals, or subscriptions but don’t clean them up, then every time the component re-renders, a new listener is added and Old ones stack up causing memory leaks, slowdown, or unexpected behavior.

## Something I learned:

If we're using "React Strict Mode", React intentionally mounts and unmounts components twice in development to help detect side effects and ensure our code is resilient.

I learned that when I got these logs on dev mode-

```java
🔵 Component mounted
🔴 Component unmounted (cleanup)
🔵 Component mounted
```

When I temporarily removed StrictMode, I could see that it only got mounted once in the beginning.
