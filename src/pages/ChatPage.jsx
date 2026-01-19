import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/chatbot/ChatWindow";
import ChatInput from "../components/chatbot/ChatInput";
import { FaBars } from "react-icons/fa";

export default function ChatPage() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="chat-page">
      {/* Toggle Button (mobile only) */}
      <button
        className={`sidebar-toggle-btn ${showSidebar ? "open" : ""}`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div className={`sidebar-mobile ${showSidebar ? "open" : ""}`}>
        <Sidebar />
      </div>

      {/* Main Chat */}
      <div className="chat-main">
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}
