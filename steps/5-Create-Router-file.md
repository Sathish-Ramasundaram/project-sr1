Create Router File
type nul > src\routes\AppRouter.tsx

```

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/features/home/HomePage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

```

Create New 
src/features/home/HomePage.tsx

mkdir src\features\home   
type nul > src\features\home\HomePage.tsx

```

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-green-600">
        SR Stores Home
      </h1>
    </div>
  );
}

```

App.tsx:

```

import { AppRouter } from "./routes/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;

```

Note: I am getting error under this line "@/features/home/HomePage";
Fix: 
npx tsc --init
This creates tsconfig.json

update with this: 
```
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "ES2020"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",

    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,

    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}

```

Open your rspack config file and add:

From: 
resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

To: 
resolve: {
  extensions: ['.ts', '.tsx', '.js'],
  alias: {
    '@': path.resolve(__dirname, 'src'),
  },
},

-------

Restart Dev Server Ctrl + C, npm run dev

Now, it will work. 

------

