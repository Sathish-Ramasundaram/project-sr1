src/features/dashboard/
mkdir src\features\dashboard

DashboardPage.tsx
DashboardHeader.tsx
DashboardCard.tsx

type nul > src\features\dashboard\DashboardPage.tsx
type nul > src\features\dashboard\DashboardHeader.tsx
type nul > src\features\dashboard\DashboardCard.tsx

```

type DashboardCardProps = {
  title: string;
  value: string | number;
};

export function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}

```

```

export function DashboardHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">SR Stores Dashboard</h1>
      <p className="text-gray-500 mt-1">
        Welcome to your admin overview
      </p>
    </div>
  );
}


```

```

import { DashboardHeader } from "./DashboardHeader";
import { DashboardCard } from "./DashboardCard";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Products" value={128} />
        <DashboardCard title="Orders Today" value={32} />
        <DashboardCard title="Revenue" value="₹45,200" />
      </div>
    </div>
  );
}


```
AppRouter.tsx:
import { DashboardPage } from "@/features/dashboard/DashboardPage";

<Route path="/dashboard" element={<DashboardPage />} />

