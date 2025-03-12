import React, { useState } from "react";
import { User2, ArrowRight } from "lucide-react";
import "./LoginSignup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginSignup() {
  const [activeTab, setActiveTab] = useState("login");

  // Login state
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [signupSuccess, setSignupSuccess] = useState("");
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess("");

    // Basic validation
    if (!username || !password) {
      setLoginError("Please fill in all fields");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, { username, password })
      .then((response) => {
        setLoginSuccess("Login successful!");
        sessionStorage.setItem("token",response.data)
        sessionStorage.setItem("user",username);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          setLoginError(
            error.response.data.message ||
              "Check ur Credentials"
          );
        } else {
          setLoginError("An error occurred. Please try again.");
        }
      });
  };

  const signup = (e) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess("");

    // Basic validation
    if (
      !signUpName ||
      !signUpEmail ||
      !signUpPassword ||
      !signUpConfirmPassword
    ) {
      setSignupError("Please fill in all fields");
      return;
    }

    if (signUpPassword !== signUpConfirmPassword) {
      setSignupError("Passwords do not match");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/signup_user`, {
        username: signUpName,
        email: signUpEmail,
        password: signUpPassword,
        cnfpassword: signUpConfirmPassword,
      })
      .then((response) => {
        setSignupSuccess("Registration successful! Please login.");
        console.log(response.data);
        // Clear form fields
        setSignUpName("");
        setSignUpEmail("");
        setSignUpPassword("");
        setSignUpConfirmPassword("");
      })
      .catch((error) => {
        if (error.response) {
          setSignupError(
            error.response.data.message || "User already exists. Please login."
          );
        } else {
          setSignupError("An error occurred. Please try again.");
        }
      });
  };

  return (
    <div className="app-container">
      <div className="auth-card">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-container">
            <img src={require("../../assets/images/log.png")} alt="img" />
          </div>
          <p className="logo-description">
            Your gateway to seamless digital experiences. Join us today and
            unlock a world of possibilities.
          </p>
          <div className="stats-container">
            <div className="stats-content">
              <div className="stats-dot"></div>
              <p>Over 10,000 users trust our platform</p>
            </div>
          </div>
        </div>

        {/* Auth Section */}
        <div className="auth-section">
          {/* Toggle Buttons */}
          <div className="toggle-container">
            <div className="toggle-buttons">
              <button
                className={`toggle-button ${
                  activeTab === "login" ? "active" : ""
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`toggle-button ${
                  activeTab === "signup" ? "active" : ""
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div className="form-container">
            {activeTab === "login" ? (
              <div className="form-section">
                <User2 style={{ width: '80px', height: '80px', marginLeft:'40%', marginBottom:'20px' }} />
                <h2 className="form-title">Welcome back</h2>
                <p className="form-subtitle">
                  Please enter your details to sign in
                </p>
                <div className="form-fields">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-container">
                      <input
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Example@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <div className="input-container">
                      <input
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Password@1234"
                      />
                    </div>
                  </div>
                  <div className="form-footer">
                    <div className="form-checkbox-container">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="form-checkbox"
                      />
                      <label
                        htmlFor="remember-me"
                        className="form-checkbox-label"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      <a href="#" className="form-link">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  {loginError && (
                    <div className="error-message">{loginError}</div>
                  )}
                  {loginSuccess && (
                    <div className="success-message">{loginSuccess}</div>
                  )}
                  <button
                    onClick={login}
                    type="submit"
                    className="submit-button"
                  >
                    <span>Sign in</span>
                    <ArrowRight size={18} className="button-icon" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="form-section">
                <User2 style={{ width: '80px', height: '80px', marginLeft:'40%', marginBottom:'20px' }} />
                <h2 className="form-title">Create account</h2>
                <p className="form-subtitle">
                  Please fill in your details to get started
                </p>
                <div className="form-fields">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <div className="input-container">
                      <input
                        type="text"
                        id="name"
                        className="form-input"
                        placeholder="Example name"
                        value={signUpName}
                        onChange={(e) => setSignUpName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-email" className="form-label">
                      Email
                    </label>
                    <div className="input-container">
                      <input
                        type="email"
                        id="signup-email"
                        className="form-input"
                        placeholder="Example@gmail.com"
                        value={signUpEmail}
                        onChange={(e) => setSignUpEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="signup-password" className="form-label">
                      Password
                    </label>
                    <div className="input-container">
                      <input
                        type="password"
                        id="signup-password"
                        className="form-input"
                        placeholder="Password@1234"
                        value={signUpPassword}
                        onChange={(e) => setSignUpPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirm-password" className="form-label">
                      Confirm Password
                    </label>
                    <div className="input-container">
                      <input
                        type="password"
                        id="confirm-password"
                        className="form-input"
                        placeholder="Password@1234"
                        value={signUpConfirmPassword}
                        onChange={(e) =>
                          setSignUpConfirmPassword(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="form-checkbox-container">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="form-checkbox"
                    />
                    <label htmlFor="terms" className="form-checkbox-label">
                      I agree to the{" "}
                      <a href="#" className="form-link">
                        Terms
                      </a>{" "}
                      and{" "}
                      <a href="#" className="form-link">
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                  {signupError && (
                    <div className="error-message">{signupError}</div>
                  )}
                  {signupSuccess && (
                    <div className="success-message">{signupSuccess}</div>
                  )}
                  <button
                    onClick={signup}
                    type="submit"
                    className="submit-button"
                  >
                    <span>Create account</span>
                    <ArrowRight size={18} className="button-icon" />
                  </button>
                </div>
              </div>
            )}

            {/* Social Login Options */}
            <div className="social-section">
              <div className="divider">
                <div className="divider-line"></div>
                <div className="divider-text">
                  <span>Or continue with</span>
                </div>
              </div>
              <div className="social-buttons">
                <button type="button" className="social-button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>
                <button type="button" className="social-button">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
