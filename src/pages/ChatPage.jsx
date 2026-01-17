import Sidebar from "../components/layout/Sidebar";
import ChatWindow from "../components/chatbot/ChatWindow";
import ChatInput from "../components/chatbot/ChatInput";

export default function ChatPage() {
  return (
    <div className="chat-page">
      <Sidebar />
      <div className="chat-main">
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}
