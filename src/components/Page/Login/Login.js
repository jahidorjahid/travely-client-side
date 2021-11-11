import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, user, logOut } = useAuth();

  const handleLogin = () => {
    signInWithGoogle();
    console.log(user.email);
  };
  return (
    <div className="my-5 text-center">
      <div className="container">
        <div
          className="bg-light shadow p-5 rounded"
          style={{ minHeight: "60vh" }}
        >
          {user?.email ? (
            <button onClick={logOut}>Logout ({user?.email})</button>
          ) : (
            <button
              type="button"
              onClick={handleLogin}
              class="login-with-google-btn"
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
