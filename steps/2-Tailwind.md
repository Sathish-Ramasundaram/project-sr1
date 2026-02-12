# Tailwind:

1.

npm install -D tailwindcss@3.4.17 postcss autoprefixer
npm install -D @tailwindcss/postcss

Install CSS loader dependencies
npm install -D style-loader css-loader postcss-loader

or
Merged command:

npm install -D tailwindcss@3.4.17 postcss autoprefixer @tailwindcss/postcss style-loader css-loader postcss-loader

2.  
type nul > tailwind.config.js

```

module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

3.  
type nul > postcss.config.js

```

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

```

4.  type nul > src/index.css

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```

6.  Update `index.tsx` to import CSS  
    ``

import "./index.css";

``

7.  Update `rspack.config.js` rules

existing module: rules propably look like this

```

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
```

update / Add css rule

```
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
    {
  test: /\.css$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: 1,
      },
    },
    "postcss-loader",
  ],
},


  ],
},

```

8.

```

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-blue-600">
        If Tailwind is working, you will see this text in the center. background gray. Bold font. Text in blue
      </h1>
    </div>
  );
}

export default App;

```
