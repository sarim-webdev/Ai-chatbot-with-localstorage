import { useState } from "react";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../context/ProfileContext";

export default function LoginForm({ switchToSignup }) {
  const { login } = useAuth();
  const { updateProfile } = useProfile();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    // empty fields
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    // password length validation
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const user = loginUser(email, password);

    // user not found → signup first
    if (!user) {
      alert("Account not found. Please signup first.");
      switchToSignup();
      return;
    }

    // success login
    login({ email }); // AuthContext
    updateProfile({ username: user.username }); // ProfileContext
    window.location.href = "/chat";
  };

  return (
    <div className="glass-card">
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit}>Login</button>

      <p className="switch-text">
        Don’t have an account? <span onClick={switchToSignup}>Signup</span>
      </p>
    </div>
  );
}
