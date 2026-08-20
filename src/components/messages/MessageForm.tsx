import { useState } from "react";
import { sendMessage } from "../../api/messages";
import { useAuth } from "../../hooks/useAuth";

export default function MessageForm({ onSent }) {
  const { token } = useAuth();
  const [to, setTo] = useState("");
  const [body, setBody] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await sendMessage(token, { to, body });
    setTo("");
    setBody("");
    onSent();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Send Message</h3>

      <input
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit">Send</button>
    </form>
  );
}
