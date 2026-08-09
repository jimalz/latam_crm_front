const API = "http://localhost:3000";

export async function getMessages(token) {
  const res = await fetch(`${API}/messages`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function sendMessage(token, message) {
  const res = await fetch(`${API}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(message)
  });
  return res.json();
}
