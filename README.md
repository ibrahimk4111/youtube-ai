This is a Plasmo extension project bootstrapped with plasmo init.

## Getting Started
First, run the development server:

```bash 
pnpm dev
# or
npm run dev
```
Open your browser and load the appropriate development build. For example, if you are developing for the chrome browser, using manifest v3, use: build/chrome-mv3-dev.

You can start editing the popup by modifying popup.tsx. It should auto-update as you make changes. To add an options page, simply add a options.tsx file to the root of the project, with a react component default exported. Likewise to add a content page, add a content.ts file to the root of the project, importing some module and do some logic, then reload the extension on your browser.

For further guidance, visit our Documentation

## Making production build
Run the following:

```bash 
pnpm build
# or
npm run build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Submit to the webstores
The easiest way to deploy your Plasmo extension is to use the built-in bpp GitHub action. Prior to using this action however, make sure to build your extension and upload the first version to the store to establish the basic credentials. Then, simply follow this setup instruction and you should be on your way for automated submission!


## Newly setup commands from beginning.

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

  ```bash
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

