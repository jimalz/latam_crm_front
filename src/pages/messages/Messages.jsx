import { useState } from "react";
import MainLayout from "../../layout/MainLayout";
import MessageForm from "../../components/messages/MessageForm";
import MessageList from "../../components/messages/MessageList";

export default function Messages() {
  const [refresh, setRefresh] = useState(false);

  return (
    <MainLayout>
      <MessageForm onSent={() => setRefresh(!refresh)} />
      <MessageList key={refresh} />
    </MainLayout>
  );
}
