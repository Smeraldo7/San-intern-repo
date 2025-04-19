# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Setting Up React App with Vite and Tailwind CSS

## 1. Create a React App with Vite

Open your terminal, navigate to the desired folder, and run:

```bash
npm create vite@latest react_app -- --template react
cd react_app
```

## 2. Setting Up Tailwind CSS

Install Tailwind CSS and the Vite plugin:

```bash
npm install tailwindcss @tailwindcss/vite
```

## 3. Configure Vite

Open the project in VSCode, then update vite.config.js:

```js
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

## 4.Add Tailwind to CSS

Add the following @import to your index.css (or src/index.css):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 5.Run the Development Server

Start your development server:

```bash
npm run dev
```

Press o + Enter to open the app in your browser.
Press h + Enter to view other available commands.
