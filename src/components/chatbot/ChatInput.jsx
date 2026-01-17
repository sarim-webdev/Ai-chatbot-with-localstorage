import { useState } from "react";
import { useChat } from "../../context/ChatContext";

export default function ChatInput() {
  const [text, setText] = useState("");
  const { sendMessage } = useChat();

  const handleSend = () => {
    if (text.trim() === "") return; // prevent empty messages
    sendMessage(text.trim());
    setText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend(); // send on Enter
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
