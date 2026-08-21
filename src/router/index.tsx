import { Routes, Route } from "react-router-dom";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "@/layout/MainLayout";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
