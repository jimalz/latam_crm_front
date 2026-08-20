import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
