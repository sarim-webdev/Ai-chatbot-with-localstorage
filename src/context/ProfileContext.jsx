import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem("profile");
    return saved ? JSON.parse(saved) : { username: "User" };
  });

  const updateProfile = (data) => {
    const updatedProfile = { ...profile, ...data };
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
    setProfile(updatedProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
