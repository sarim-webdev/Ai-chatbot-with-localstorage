export const saveProfile = (data) => {
  localStorage.setItem("profile", JSON.stringify(data));
};
