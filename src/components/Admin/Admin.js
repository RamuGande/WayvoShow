import React, { useState } from 'react';
import { Building2, Mail, Lock, User, ArrowRight } from 'lucide-react';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="app-container">
      <div className="auth-card">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-container">
          <img src={require('../assets/images/log.png')} alt="img" />
          </div>
          
          <p className="logo-description">
            Your gateway to seamless digital experiences. Join us today and unlock a world of possibilities.
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

          {/* Form Container */}
          <div className="form-container">
              <div className="form-section">
                <h1 className="form-title">Admin Login</h1>
                <p className="form-subtitle">Please enter your details to sign in</p>
                
                <div className="form-fields">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <div className="input-container">
                      <div className="input-icon">
                        <Mail size={18} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <div className="input-container">
                      <div className="input-icon">
                        <Lock size={18} />
                      </div>
                      <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  
                  <div className="form-footer">
                    
                    <div>
                      <a href="#" className="form-link">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <span>Sign in</span>
                    <ArrowRight size={18} className="button-icon" />
                  </button>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;