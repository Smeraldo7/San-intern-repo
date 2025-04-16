# Practice React Debugging in a Test Repo

## What was the issue?

I recreated the bug on derived state, where the component wasn't updating as expected due to how the state was being derived.
The buggy version (DailyGoalsBug) didn’t reset the input field with a new initial goal after submitting.
Even though I passed a new initialGoal prop, the input box kept showing the previous value.

This happened because:

- The GoalForm component only sets state once using useState(initialGoal).
- React does not reinitialize state just because a prop changes — useState runs only once on mount.
  So the component kept the old goal state, ignoring the new initialGoal prop from the parent.

## What debugging method did you use?

- Recreated the bug in a new page (DailyGoalsBug) to isolate it.
- Verified that the input doesn't change to the next initialGoal after submit.

## How did you resolve the problem?

- Used the key prop to let React know that its a different version of the component so recreate it from scratch.
- In the fixed version (DailyGoalsFixed), I updated this line:

```jsx
<GoalForm
  key={goals.length} // Forces remount on each new goal
  initialGoal={goalIdeas[goals.length]}
  onGoalComplete={onGoalComplete}
/>
```

- So by changing the key, React fully re-renders the child, resetting its internal state (useState(initialGoal)) as intended.
