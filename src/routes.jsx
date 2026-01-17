import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}
