import React, { useState } from "react";
import "../styles/loginForm.css"; // import file CSS


const LoginForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <h1>ZECT - Dev</h1>
        <p>Thousands of instant online classes/tutorials included</p>
      </div>

      <div className="login-right">
        <div className="tab-switcher">
          <span
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </span>
          <span
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </span>
        </div>

        <form>
          {activeTab === "login" ? (
            <>
              <h2>Login</h2>
              <input type="text" placeholder="Email or Username" />
              <input type="password" placeholder="Password" />
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <button type="submit">Login</button>
              <div className="forgot">Forgot your password?</div>
            </>
          ) : (
            <>
              <h2>Sign Up</h2>
              <input type="text" placeholder="Username" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit">Register</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


