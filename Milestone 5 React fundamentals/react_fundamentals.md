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
