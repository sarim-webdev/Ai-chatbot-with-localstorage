import { useState } from "react";
import { useProfile } from "../../context/ProfileContext";

export default function EditProfile() {
  const { profile, updateProfile } = useProfile();
  const [name, setName] = useState(profile.name);

  return (
    <>
      <input value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>updateProfile({ name })}>Save</button>
    </>
  );
}
