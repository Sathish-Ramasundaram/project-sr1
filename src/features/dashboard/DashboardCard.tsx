type DashboardCardProps = {
  title: string;
  value: string | number;
};

export function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
