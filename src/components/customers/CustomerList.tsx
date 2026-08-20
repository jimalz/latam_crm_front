import { useEffect, useState } from "react";
import { getCustomers, deleteCustomer } from "../../api/customers";
import { useAuth } from "../../hooks/useAuth";

export default function CustomerList({ onEdit }) {
  const { token } = useAuth();
  const [customers, setCustomers] = useState([]);

  async function load() {
    const data = await getCustomers(token);
    setCustomers(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id) {
    await deleteCustomer(token, id);
    load();
  }

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((c) => (
          <li key={c.id}>
            {c.name} — {c.email}
            <button onClick={() => onEdit(c)}>Edit</button>
            <button onClick={() => handleDelete(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
