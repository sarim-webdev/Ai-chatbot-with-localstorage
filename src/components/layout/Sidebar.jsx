import Avatar from "../common/Avatar";
import { useProfile } from "../../context/ProfileContext";
import { useAuth } from "../../context/AuthContext";
import { FaPlus, FaImage } from "react-icons/fa"; // react-icons import

export default function Sidebar({ onNewChat, onNewImage }) {
  const { profile } = useProfile();    // fetch username
  const { logout } = useAuth();        // logout function

  const handleLogout = () => {
    logout();                          // clear auth
    window.location.href = "/";        // redirect to login
  };

  return (
    <div className="sidebar">
      {/* Top Section */}
      <div className="sidebar-top">
        <h2>AI Assistant</h2>

        {/* New Chat Button */}
        <button className="new-chat-btn" onClick={onNewChat}>
          <FaPlus style={{ marginRight: "8px" }} />
          New Chat
        </button>

        {/* New Image Button */}
        <button className="new-image-btn" onClick={onNewImage}>
          <FaImage style={{ marginRight: "8px" }} />
          New Image
        </button>
      </div>

      {/* Middle Section (optional future features) */}
      <div className="sidebar-middle"></div>

      {/* Bottom Profile */}
      <div className="sidebar-bottom">
        <Avatar name={profile.username || "User"} />
        <p className="sidebar-username">{profile.username || "User"}</p>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
