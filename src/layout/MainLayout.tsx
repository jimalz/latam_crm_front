import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { user, logout } = useAuth();

  return (
    <div>
      <header>
        <nav>
          <Link to="/dashboard">Dashboard</Link>{" | "}
          <Link to="/customers">Customers</Link>{" | "}
          <Link to="/campaigns">Campaigns</Link>{" | "}
          <Link to="/messages">Messages</Link>
          {" | "}
          {user && (
            <button onClick={logout} style={{ marginLeft: "1rem" }}>
              Logout
            </button>
          )}
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
