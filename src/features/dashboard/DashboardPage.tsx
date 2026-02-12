import { DashboardHeader } from "./DashboardHeader";
import { DashboardCard } from "./DashboardCard";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Products" value={128} />
        <DashboardCard title="Orders Today" value={32} />
        <DashboardCard title="Revenue" value="₹45,200" />
      </div>
    </div>
  );
}
