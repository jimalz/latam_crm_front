import { useEffect, useState } from "react";
import { getMessages } from "../../api/messages";
import { useAuth } from "../../hooks/useAuth";

export default function MessageList() {
  const { token } = useAuth();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getMessages(token);
      setMessages(data);
    }
    load();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>
            {m.to} — {m.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
