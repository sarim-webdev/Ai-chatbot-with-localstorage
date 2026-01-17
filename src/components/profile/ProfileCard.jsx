import { useProfile } from "../../context/ProfileContext";

export default function ProfileCard() {
  const { profile } = useProfile();

  return (
    <div className="profile-card">
      <h3>{profile.username}</h3>
    </div>
  );
}
