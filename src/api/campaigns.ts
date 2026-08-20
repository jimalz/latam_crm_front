const API = "http://localhost:3000";

export async function getCampaigns(token) {
  const res = await fetch(`${API}/campaigns`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}

export async function createCampaign(token, campaign) {
  const res = await fetch(`${API}/campaigns`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(campaign)
  });
  return res.json();
}
