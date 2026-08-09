import { useState } from "react";
import { createCampaign } from "../../api/campaigns";
import { useAuth } from "../../hooks/useAuth";

export default function CampaignForm({ onSaved }) {
  const { token } = useAuth();
  const [name, setName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createCampaign(token, { name });
    setName("");
    onSaved();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Campaign</h3>

      <input
        placeholder="Campaign Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
}
