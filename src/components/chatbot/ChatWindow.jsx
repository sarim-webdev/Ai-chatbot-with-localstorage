// src/components/chatbot/ChatWindow.jsx
import { useChat } from "../../context/ChatContext";

export default function ChatWindow() {
  const { messages } = useChat();

  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
