import { useEffect, useState } from "react";
import { customerService } from "@/services/customerService";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    customerService.getAll().then(setCustomers);
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <pre>{JSON.stringify(customers, null, 2)}</pre>
    </div>
  );
}
