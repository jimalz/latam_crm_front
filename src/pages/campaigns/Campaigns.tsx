import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import CampaignForm from "../../components/campaigns/CampaignForm";
import CampaignList from "../../components/campaigns/CampaignList";

export default function Campaigns() {
  const [refresh, setRefresh] = useState(false);

  return (
    <MainLayout>
      <CampaignForm onSaved={() => setRefresh(!refresh)} />
      <CampaignList key={refresh} />
    </MainLayout>
  );
}
