import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav>
      <h3>AI Chatbot</h3>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
