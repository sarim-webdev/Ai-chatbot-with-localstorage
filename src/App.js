import { BrowserRouter } from "react-router-dom";
import RoutesFile from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import { ProfileProvider } from "./context/ProfileContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <ChatProvider>
            <RoutesFile />
          </ChatProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
