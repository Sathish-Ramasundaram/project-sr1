1. Create the project folder
   mkdir react02

2. Navigate into the project folder
   cd react02

3. Open the folder in VS Code
   code .

4. Open the integrated terminal in VS Code
   shift + ctrl + `

5. Initialize a Node.js project
   npm init -y

6. Install React core libraries
   npm install react react-dom

7. Install TypeScript and React type definitions
   npm install -D typescript @types/react @types/react-dom

8. Set up Rspack
   npm install -D @rspack/core @rspack/cli @rspack/dev-server @rspack/plugin-react-refresh react-refresh @rspack/plugin-html

9. Create the public folder
   mkdir public

10. Create the `index.html` file inside `public`

type nul > public\index.html

```

<!DOCTYPE html>
<html lang="en">
   <head>
       <meta charset="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>SR Stores</title>
   </head>
   <body>
       <div id="root"></div>
   </body>
</html>

```

11. Create the src folder
    mkdir src

12. Create the `index.tsx` file inside `src`

type nul > src\index.tsx

Paste code inside `src/index.tsx`

```

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (!container) { 
throw new Error("Root element not found");
}

const root = createRoot(container);
root.render(
<div>Test from index.tsx</div>
);

```

13. Create the Rspack configuration file in the root

type nul > rspack.config.js

Paste code into `rspack.config.js`

```

const path = require('path');
const HtmlRspackPlugin = require('@rspack/plugin-html').default;

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'builtin:swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: 'typescript',
                tsx: true,
              },
              transform: {
                react: {
                  runtime: 'automatic',
                },
              },
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlRspackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};

```
---

15. Update the scripts in `package.json`

"scripts": {
"dev": "rspack serve",
"build": "rspack build"
},


- Production build  
  npm run build

We see
dist/
├── bundle.js
└── index.html

Shift + Alt + F ---> Align the code

- **A5** Start development server

npm run dev

npm run build ← only when needed


  type nul > src\App.tsx

```

function App() {
  return (
    <div>
      Hello from App.tsx
    </div>
  );
}

export default App;

```

- **A7** Update `index.tsx` to render `App`

```
import App from "./App";

root.render(
    <App />
```


---

import React from "react";

To: 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

---------------------------

Optional(for github):

type nul > .gitignore

```

# =========================
# Dependencies
# =========================
node_modules/

# =========================
# Build outputs
# =========================
dist/
build/
.out/
coverage/

# =========================
# Rspack / Bundler cache
# =========================
.rspack/
.cache/

# =========================
# Logs
# =========================
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# =========================
# Environment files
# =========================
.env
.env.local
.env.*.local

# =========================
# Editor folders
# =========================
.vscode/
.idea/
.DS_Store
Thumbs.db

# =========================
# TypeScript
# =========================
*.tsbuildinfo

# =========================
# Testing
# =========================
cypress/videos/
cypress/screenshots/

# =========================
# Storybook build
# =========================
storybook-static/

# =========================
# Temporary files
# =========================
*.tmp
*.temp


```