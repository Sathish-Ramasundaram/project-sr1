# Project SR1 - React E-Commerce Dashboard

A modern React + TypeScript application featuring an e-commerce dashboard with product management, billing, and theme customization capabilities.

## 🚀 Features

- **Home Page** - Landing page with navigation and overview
- **Dashboard** - Analytics and metrics dashboard with customizable cards
- **Product Store** - Browse and manage products with a form interface
- **Billing Page** - Invoice management and payment processing
- **Theme Toggle** - Light/Dark mode support using Context API
- **Responsive Design** - Built with Tailwind CSS for mobile-first styling
- **Type-Safe** - Full TypeScript support for enhanced developer experience

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Frontend Framework**: React 19+
- **Language**: TypeScript 5+
- **Bundler**: Rspack (fastest Rust-based bundler)
- **Routing**: React Router DOM 7+
- **Styling**: Tailwind CSS 3+ with PostCSS
- **Dev Tools**: React Refresh for Hot Module Replacement (HMR)

## 📁 Project Structure

```
src/
├── App.tsx                 # Main app component
├── index.tsx              # Entry point
├── index.css              # Global styles
├── components/            # Reusable UI components
│   └── ThemeToggle.tsx    # Dark mode toggle
├── contexts/              # React Context providers
│   └── ThemeContext.tsx   # Theme management
├── features/              # Feature modules
│   ├── auth/              # Authentication
│   ├── billing/           # Billing management
│   │   ├── BillPage.tsx
│   │   ├── BillRow.tsx
│   │   └── PaymentSelect.tsx
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout process
│   ├── dashboard/         # Dashboard pages
│   │   ├── DashboardCard.tsx
│   │   ├── DashboardHeader.tsx
│   │   └── DashboardPage.tsx
│   ├── home/              # Home page
│   │   └── HomePage.tsx
│   └── products/          # Product management
│       ├── ProductForm.tsx
│       ├── ProductItem.tsx
│       ├── ProductList.tsx
│       ├── StorePage.tsx
│       └── types.ts
├── hooks/                 # Custom React hooks
├── hoc/                   # Higher-Order Components
├── renderProps/           # Render props pattern
├── routes/                # Route configuration
│   └── AppRouter.tsx      # Main router
├── services/              # API and business logic
├── store/                 # State management
├── styles/                # Shared styles
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🚄 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone/Navigate to the project**

   ```bash
   cd project-sr1
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:8080`

4. **Build for production**
   ```bash
   npm run build
   ```
   Output files will be in the `dist/` directory

## 📝 Available Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start Rspack dev server with HMR  |
| `npm run build` | Build optimized production bundle |

## 🎨 Key Components

### Theme Provider

The app uses Context API for theme management:

```tsx
<ThemeProvider>
  <App />
</ThemeProvider>
```

### Routing

All routes are configured in `AppRouter.tsx`:

- `/` - Home page
- `/dashboard` - Dashboard
- `/store` - Products store
- `/bill` - Billing page

### Styling

- **Tailwind CSS** for utility-first styling
- **PostCSS** for CSS processing
- **Dark mode** support via theme context

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration
- `rspack.config.js` - Rspack bundler configuration
- `tailwind.config.js` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins
- `package.json` - Project dependencies and scripts

## 🧑‍💻 Development Guide

### Adding New Pages

1. Create a feature folder under `src/features/`
2. Create page component (e.g., `NewPage.tsx`)
3. Add route in `src/routes/AppRouter.tsx`
4. Import and configure the route

### Adding Components

1. Create component in `src/components/` (reusable)
2. Or in the specific feature folder (feature-specific)
3. Use TypeScript interfaces for props

### Using Theme

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle {theme} mode</button>;
}
```

## 📚 Learning Path

The project includes step-by-step documentation:

1. Manual Setup - Project initialization
2. Tailwind Setup - CSS framework integration
3. Browser Router - Navigation setup
4. Project Structure - Folder organization
5. Router Configuration - Route setup
6. Dashboard - Building dashboard features
7. Context/Theme - State management
8. Cart Items - Shopping cart functionality
9. Billing Page - Invoice management

## 🎯 Next Steps

- Complete authentication module
- Implement shopping cart logic
- Add checkout process
- Connect to backend API
- Add form validation
- Implement state management (Redux/Zustand if needed)
- Add unit and integration tests
- Deploy to production

## 📄 License

ISC

## 👤 Author

Your Name Here

---

**Happy coding! 🎉**
