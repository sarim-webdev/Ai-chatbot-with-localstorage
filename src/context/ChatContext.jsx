// src/context/ChatContext.jsx
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // { text, sender: "user"|"bot" }

  const sendMessage = (text) => {
    // User message
    setMessages((prev) => [...prev, { text, sender: "user" }]);

    // Bot reply (simulate)
    setTimeout(() => {
      const botReply = "This is bot reply to: " + text;
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
