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
