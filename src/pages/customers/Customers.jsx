import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import CustomerList from "../../components/customers/CustomerList";
import CustomerForm from "../../components/customers/CustomerForm";

export default function Customers() {
  const [selected, setSelected] = useState(null);
  const [refresh, setRefresh] = useState(false);

  function handleSaved() {
    setSelected(null);
    setRefresh(!refresh);
  }

  return (
    <MainLayout>
      <CustomerForm selected={selected} onSaved={handleSaved} />
      <CustomerList key={refresh} onEdit={setSelected} />
    </MainLayout>
  );
}
