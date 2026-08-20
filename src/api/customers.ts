const API = "http://localhost:3000";

export async function getCustomers(token) {
  const res = await fetch(`${API}/customers`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function createCustomer(token, customer) {
  const res = await fetch(`${API}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(customer)
  });
  return res.json();
}

export async function updateCustomer(token, id, customer) {
  const res = await fetch(`${API}/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(customer)
  });
  return res.json();
}

export async function deleteCustomer(token, id) {
  const res = await fetch(`${API}/customers/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}
