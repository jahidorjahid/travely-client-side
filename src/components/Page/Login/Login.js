import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle, user, logOut } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectURL = location.state?.from || "/";

  const handleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirectURL);
      })
      .catch((err) => console.warn(err.message));
  };
  return (
    <div className="my-5 text-center">
      <div className="container">
        <div className="bg-light shadow p-5 rounded login-wrapper">
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
