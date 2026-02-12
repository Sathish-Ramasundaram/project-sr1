import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/features/home/HomePage";
import { DashboardPage } from "@/features/dashboard/DashboardPage";
import { StorePage } from "@/features/products/StorePage";
import { BillPage } from "@/features/billing/BillPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/bill" element={<BillPage />} />
      </Routes>
    </BrowserRouter>
  );
}
