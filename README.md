
## Getting Started

1. To create new app:

```bash
pnpm create plasmo --with-src
```

```bash
pnpm dev
# or
npm run dev
```


2. Add Tailwindcss manually:

```bash
pnpm i -D tailwindcss postcss autoprefixer
and
npx tailwindcss init
```


3. Defining Your PostCSS Config
  `postcss.config.js`

  ```
    /**
    * @type {import('postcss').ProcessOptions}
    */
    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  ```

4. Setting up Tailwind config
  `tailwind.config.js`

  ```
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      mode: "jit",
      darkMode: "class",
      content: ["./**/*.tsx"],
      plugins: []
    }
  ```

5. Adding Root Styles
  `style.css`

  ```bash
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  ```

6. Installing shadecn/ui

```bash
pnpm dlx shadecn-ui@latest init
```

