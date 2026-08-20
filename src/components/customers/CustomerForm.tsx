import { useState } from "react";
import { createCustomer, updateCustomer } from "../../api/customers";
import { useAuth } from "../../hooks/useAuth";

export default function CustomerForm({ selected, onSaved }) {
  const { token } = useAuth();
  const [name, setName] = useState(selected?.name || "");
  const [email, setEmail] = useState(selected?.email || "");

  async function handleSubmit(e) {
    e.preventDefault();

    if (selected) {
      await updateCustomer(token, selected.id, { name, email });
    } else {
      await createCustomer(token, { name, email });
    }

    onSaved();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>{selected ? "Edit Customer" : "Add Customer"}</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
