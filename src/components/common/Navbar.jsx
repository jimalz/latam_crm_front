import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
