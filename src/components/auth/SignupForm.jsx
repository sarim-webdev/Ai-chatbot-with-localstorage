import { useState } from "react";
import { signupUser } from "../../services/authService";
import { useProfile } from "../../context/ProfileContext";

export default function SignupForm({ switchToLogin }) {
  const { updateProfile } = useProfile(); // ProfileContext
  const [data, setData] = useState({
    username: "",
    age: "",
    profession: "",
    email: "",
    password: "",
  });

  const submit = () => {
  const { username, age, profession, email, password } = data;

  if (!username || !age || !profession || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  if (age < 12) {
    alert("Age must be greater than 12");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const result = signupUser(data);
  if (!result) return; // email exists

  // Update ProfileContext
  updateProfile({ username: username });

  alert("Signup successful! Redirecting to login...");
  switchToLogin();
};


  return (
    <div className="glass-card">
      <h2>Signup</h2>

      <input
        placeholder="Username"
        onChange={(e) => setData({ ...data, username: e.target.value })}
      />
      <input
        placeholder="Age"
        type="number"
        onChange={(e) => setData({ ...data, age: e.target.value })}
      />
      <input
        placeholder="Profession"
        onChange={(e) => setData({ ...data, profession: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={submit}>Signup</button>

      <p className="switch-text">
        Already have an account? <span onClick={switchToLogin}>Login</span>
      </p>
    </div>
  );
}
