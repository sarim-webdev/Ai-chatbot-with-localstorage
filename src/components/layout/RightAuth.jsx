import { useState } from "react";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";

export default function RightAuth() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-right">
      {isLogin ? (
        <LoginForm switchToSignup={() => setIsLogin(false)} />
      ) : (
        <SignupForm switchToLogin={() => setIsLogin(true)} />
      )}
    </div>
  );
}
