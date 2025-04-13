# Setting up a React project

## Challenges faced during setup:

- When naming the react app I initially used the name 'reactApp' with a capital 'A' and it gave an error saying that it isn't a valid npm package name since npm requires lowercase, no spaces and no special characters, so I renamed it accordingly.

- At first, I attempted to set up Tailwind CSS by creating a React + Vite app using the command:

```bash
npm create vite@latest react_app -- --template react
cd react_app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

But I ran into an error: "npm error: could not determine executable to run". I tried several troubleshooting steps but couldn’t resolve it.

So I decided to take a different approach. Instead of manually installing Tailwind, I created the React app separately and installed Tailwind CSS using it as a Vite plugin. This method worked smoothly, and I was able to configure Tailwind successfully.

# Understanding Components & Props

## Why components are important in React:

- React Apps are made out of components which are essentially pieces of the UI that have its own logic and appearance. Components allow us to separate different parts of our app into individual pieces which have their own specific functions, making it easier to read and maintain.
- And once we create a component, it can be reused throughout the app.
- Components can hold and manage their own state (via hooks like useState), allowing them to dynamically update the UI when the state changes.
- With React’s Virtual DOM, React only re-renders components that need updating based on changes in their state or props.

# Handling State & User Input

## What happens if we modify state directly instead of using setState?

If we modify state directly (e.g., count++) instead of using the provided setState function (e.g., setCount(count + 1)), React will not detect the change. As a result, the component will not re-render, and the UI will not update. Also, since state variables declared with useState are constants, trying to directly assign a new value to them will cause an error (It gives the error "This assignment will throw because "count" is a constant").

# Styling with Tailwind CSS

## What are the advantages of using Tailwind CSS?

- Fast styling since we don't have to write custom CSS but just add utility classes directly to our jsx.
- Design stays consistent across the app because we are reusing the same classes.
- Responsive by default (Tailwind has built-in responsive classes like sm:, md:, lg:).
- No need to think of CSS class names like .card-wrapper or .btn-primary.
- can extend themes (colors, fonts, spacing) easily via the Tailwind config file.

## What are some potential pitfalls?

- Long className strings can get messy.
- Need to memorize a lot of class names like pl-4, text-xl, justify-between, etc.
- If we’re repeating the same combo of classes in 10 places, it’s harder to update later unless we extract it into a component or a custom class.
- For super custom designs (like animations or complex layouts), Tailwind may need to be combined with custom CSS anyway.
- Tailwind needs a build tool like Vite, Webpack, or Next.js to work properly.

# Working with Lists & User Input

## What are some common issues when working with lists in React?

- Missing or incorrect key prop:React throws a warning like "Warning: Each child in a list should have a unique "key" prop."
  This is because keys help React identify which items changed, are added, or removed. Without proper keys, React can render the wrong stuff or be less efficient. Therefore we should use a unique and stable value as the key — like an id from your data, not just the index (especially if the list changes).

- Mutating state directly:cant modify an array like-

```js
items.push('new item');
```

But need to create a new copy of the array like:

```js
setItems([...items, 'new item']);
```

- Using index as key in dynamic lists: If list items can be reordered, added, or deleted, using index as a key can cause bugs (like items "jumping" around or the wrong one getting removed).
  solution:

```Js
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

- Not updating the list correctly:When deleting or updating an item, if we don’t filter or map properly, we might remove the wrong one or cause an error.
  solution:

```js
setItems(items.filter((_, i) => i !== indexToDelete));
```

# Navigation with React Router

## What are the advantages of client-side routing?

- Faster Navigation (No Full Page Reloads):Only part of the page updates which makes the experience feel smoother and more like a native app.

- Better User Experience as the transitions between pages are instant, with no flicker or reset of the scroll position unless we want it.

- Data and UI state (like a counter or form inputs) can persist while navigating between routes if stored in memory.

- We can animate transitions, block navigation (e.g., warn users before leaving a form), and handle nested routes easily.

- With libraries like React Router, the app logic, components, and routes can all live in one clean place without needing a separate backend routing system.
