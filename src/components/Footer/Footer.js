import React from 'react';
import { Clock, RefreshCw, Shield } from 'lucide-react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="horizontal-line"></div>
        
        <div className="footer-services">
          <div className="service-item">
            <Clock className="service-icon" />
            <div className="service-text">
              <h3>24/7 Contact Support</h3>
              <p>Always here to help you</p>
            </div>
          </div>
          
          <div className="service-item">
            <RefreshCw className="service-icon" />
            <div className="service-text">
              <h3>Refund Status</h3>
              <p>Track your refund easily</p>
            </div>
          </div>
          
          <div className="service-item">
            <Shield className="service-icon" />
            <div className="service-text">
              <h3>Secure Payments</h3>
              <p>Your transactions are safe</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 CinemaHub. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;