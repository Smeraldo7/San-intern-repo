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

# Optimizing Performance with useMemo

## How does useMemo improve performance?

- It memoizes/remembers the result of a computation, and only recalculates it if the dependencies change. Therefore it prevents expensive functions from running on every re-render.

## When should you avoid using useMemo?

When:

- The computation is cheap (like simple math or small filtering).
- The component rarely re-renders.
  Because useMemo itself has a cost i.e React has to remember and compare dependencies. Overusing it can actually hurt performance.

## What happens if you remove useMemo from your implementation?

- The expensive calculation will run every time the component re-renders which can lead to laggy UI, slow rendering and unnecessary CPU usage.

# Preventing Unnecessary Renders with useCallback

## What problem does useCallback solve?

- It helps prevent unnecessary re-renders of child components when we're passing functions as props.Normally, every time a parent component re-renders, all its functions are recreated. This causes:
  Child components wrapped with React.memo() to re-render anyway (because the function prop looks "new"). useCallback returns the same function reference across renders unless dependencies change, which avoids this issue.

## How does useCallback work differently from useMemo?

- useCallback returns a memoized function, while useMemo returns a memoized value or result.

- useCallback is used for optimizing functions that are passed as props, whereas useMemo is used for optimizing expensive calculations.

- The syntax for useCallback is useCallback(fn, deps), and for useMemo it is useMemo(() => result, deps).

- A common use case for useCallback is to prevent child components from re-rendering due to function prop changes, while useMemo is typically used to avoid recalculating heavy operations on every render.

## When would useCallback not be useful?

- When we are not passing functions as props: If the function is used only within the same component, useCallback is usually unnecessary.
- When the function is cheap and doesn't affect performance.
- When we're not using React.memo on children: If the child always re-renders anyway, there's no benefit to memoizing the callback.
