import React from "react";
import { Link } from "react-router-dom";

const AuthLinks = () => {
  return (
    <div id="auth" className="flex items-center gap-2.5">
      <Link
        to="/auth/login"
        id="login"
        className="font-bold hover:text-purple-500"
      >
        Login
      </Link>

      <Link
        to="/auth/signup"
        id="signup"
        className="px-2 py-1.5 rounded bg-purple-600 hover:bg-purple-700"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default AuthLinks;
