src/contexts/ThemeContext.tsx

type nul > src\contexts\ThemeContext.tsx

```

import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return ctx;
}


```

index.tsx

import { ThemeProvider } from "@/contexts/ThemeContext";

Wrap:  
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>

Enable Tailwind Dark Mode
Open:
tailwind.config.js

Add:
darkMode: "class",

Example: 
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

----

src/components/ThemeToggle.tsx
create reusable component

type nul > src\components\ThemeToggle.tsx

```

import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-blue-600 text-white"
    >
      Theme: {theme}
    </button>
  );
}


```

update DashboardHeader.tsx

```
import { ThemeToggle } from "@/components/ThemeToggle";

export function DashboardHeader() {
  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold dark:text-white">
          SR Stores Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-300">
          Welcome to your admin overview
        </p>
      </div>

      <ThemeToggle />
    </div>
  );
}

```

update DashboardPage containers: 
<div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">

update DashboardCard: 
<div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">


Showed error under: import { ThemeToggle } from "@/components/ThemeToggle";

After restart VS, error gone. 
