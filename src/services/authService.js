// services/authService.js

// Signup: add new user to localStorage array
export const signupUser = (data) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  if (users.find(u => u.email === data.email)) {
    alert("Email already registered");
    return false;
  }

  // Add user
  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));

  // Save profile info for Sidebar
  localStorage.setItem("profile", JSON.stringify({ username: data.username }));

  return true;
};

// Login: find user from array
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    // Save profile info for Sidebar
    localStorage.setItem("profile", JSON.stringify({ username: user.username }));
    return user; // return full user object
  }

  return null;
};
