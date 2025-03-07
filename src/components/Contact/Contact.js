import React, { useState } from "react";
import "./ContactUs.css";
import Navbar from "../Navbar/Navbar";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div className="contact-page-wrapper">
        <div className="contact-page-hero">
          <h1 className="contact-hero-title">Get in Touch</h1>
          <p className="contact-hero-subtitle">
            We're here to help and answer any questions you might have
          </p>
        </div>

        <div className="contact-main-container">
          {/* Contact Information Card */}
          <div className="contact-info-card">
            <h2 className="contact-section-title">Contact Information</h2>
            <div className="contact-info-grid">
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div className="contact-info-content">
                  <h3 className="contact-info-title">Phone Support</h3>
                  <p className="contact-info-text">+1 (800) 123-4567</p>
                  <p className="contact-info-text">+1 (800) 765-4321</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div className="contact-info-content">
                  <h3 className="contact-info-title">Email Support</h3>
                  <p className="contact-info-text">support@cinemahub.com</p>
                  <p className="contact-info-text">info@cinemahub.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div className="contact-info-content">
                  <h3 className="contact-info-title">Location</h3>
                  <p className="contact-info-text">123 Cinema Street, Suite 100</p>
                  <p className="contact-info-text">Hollywood, CA 90028</p>
                </div>
              </div>

              <div className="contact-info-item">
                <Clock className="contact-icon" />
                <div className="contact-info-content">
                  <h3 className="contact-info-title">Business Hours</h3>
                  <p className="contact-info-text">Mon - Fri: 9AM - 8PM</p>
                  <p className="contact-info-text">Sat - Sun: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="contact-form-card">
            <h2 className="contact-section-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-group">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="contact-form-group">
                <input
                  type="email"
                  className="contact-input"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="contact-form-group">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  required
                />
              </div>
              <div className="contact-form-group">
                <textarea
                  className="contact-textarea"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit-button">
                <Send className="contact-submit-icon" />
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="contact-faq-card">
            <h2 className="contact-section-title">
              <MessageCircle className="contact-icon" />
              Frequently Asked Questions
            </h2>
            <div className="contact-faq-grid">
              {[
                {
                  question: "How can I cancel my booking?",
                  answer: "You can cancel your booking up to 4 hours before showtime through your account dashboard."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and digital wallets."
                },
                {
                  question: "How do I get my e-tickets?",
                  answer: "E-tickets are sent to your email immediately after purchase confirmation."
                },
                {
                  question: "Can I change my seat after booking?",
                  answer: "Yes, you can modify your seat selection up to 2 hours before the show."
                }
              ].map((faq, index) => (
                <div key={index} className="contact-faq-item">
                  <h3 className="contact-faq-question">{faq.question}</h3>
                  <p className="contact-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;