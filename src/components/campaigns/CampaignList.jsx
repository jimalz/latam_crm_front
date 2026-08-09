import { useEffect, useState } from "react";
import { getCampaigns } from "../../api/campaigns";
import { useAuth } from "../../hooks/useAuth";

export default function CampaignList() {
  const { token } = useAuth();
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getCampaigns(token);
      setCampaigns(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      <ul>
        {campaigns.map((c) => (
          <li key={c.id}>
            {c.name} — {c.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
