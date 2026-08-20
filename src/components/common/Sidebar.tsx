import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "200px", background: "#ddd", padding: "20px" }}>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
      </ul>
    </aside>
  );
}
