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

##
