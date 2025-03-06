import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, DollarSign, CheckCircle } from 'lucide-react';
import './privatebooking.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const PrivateBooking = () => {
  const [formData, setFormData] = useState({
    people: '',
    location: '',
    date: '',
    startTime: '',
    endTime: '',
  });
  
  const [checkingAvailability, setCheckingAvailability] = useState(false);
  const [availabilityStatus, setAvailabilityStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const calculateHours = () => {
    if (!formData.startTime || !formData.endTime) return 0;
    
    const start = new Date(`2000-01-01T${formData.startTime}`);
    const end = new Date(`2000-01-01T${formData.endTime}`);
    
    if (end <= start) return 0;
    
    const diffMs = end - start;
    const diffHrs = diffMs / (1000 * 60 * 60);
    
    return diffHrs;
  };
  
  const calculatePrice = () => {
    const hours = calculateHours();
    const baseRate = 25000; 
    const peopleRate = formData.people ? parseInt(formData.people) * 550 : 0; 
    
    return (baseRate + peopleRate) * hours;
  };
  
  const checkAvailability = (e) => {
    e.preventDefault();
    setCheckingAvailability(true);
    
    setTimeout(() => {
      const isAvailable = Math.random() > 0.3;
      setAvailabilityStatus(isAvailable);
      setCheckingAvailability(false);
    }, 1500);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
  };
  
  return (
    <div className="booking-page">
      <Navbar />
      <div className="booking-container">
        <div className="booking-header">
          <h1>Private Theatre Booking</h1>
          <p>Book an entire theatre for your private event</p>
        </div>
        
        <div className="booking-content">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                <Users className="form-icon" />
                Number of People
              </label>
              <input
                type="number"
                name="people"
                value={formData.people}
                onChange={handleChange}
                placeholder="Enter number of guests"
                min="1"
                required
              />
            </div>
            
            <div className="form-group">
              <label>
                <MapPin className="form-icon" />
                Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">Select a location</option>
                <option value="hyd">Hyderabad</option>
                <option value="bnglr">Banglore</option>
                <option value="mum">Mumbai</option>
                <option value="del">Delhi</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>
                <Calendar className="form-icon" />
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group half">
                <label>
                  <Clock className="form-icon" />
                  Start Time
                </label>
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group half">
                <label>
                  <Clock className="form-icon" />
                  End Time
                </label>
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="price-calculator">
              <div className="price-header">
                <DollarSign className="price-icon" />
                <h3>Price Calculation</h3>
              </div>
              
              <div className="price-details">
                <div className="price-row">
                  <span>Base Rate:</span>
                  <span>25,000/- per hour</span>
                </div>
                <div className="price-row">
                  <span>Per Person Fee:</span>
                  <span>550/- per person</span>
                </div>
                <div className="price-row">
                  <span>Duration:</span>
                  <span>{calculateHours()} hours</span>
                </div>
                <div className="price-row total">
                  <span>Total Estimated Price:</span>
                  <span>{calculatePrice().toFixed(2)} /-</span>
                </div>
              </div>
            </div>
            
            <div className="availability-section">
              <button 
                type="button" 
                className="check-availability-btn"
                onClick={checkAvailability}
                disabled={checkingAvailability}
              >
                {checkingAvailability ? 'Checking...' : 'Check Availability'}
              </button>
              
              {availabilityStatus !== null && (
                <div className={`availability-status ${availabilityStatus ? 'available' : 'unavailable'}`}>
                  <CheckCircle className="status-icon" />
                  <span>
                    {availabilityStatus 
                      ? 'Available! You can proceed with booking.' 
                      : 'Sorry, this time slot is not available. Please try different timing.'}
                  </span>
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={!availabilityStatus}
            >
              Complete Booking
            </button>
          </form>
          
          <div className="booking-info">
            <h2>Private Theatre Experience</h2>
            <p>Enjoy the ultimate movie experience with your friends and family in a private theatre setting.</p>
            
            <div className="info-section">
              <h3>What's Included:</h3>
              <ul>
                <li>Exclusive access to the entire theatre</li>
                <li>Personal concierge service</li>
                <li>Custom movie selection from our library</li>
                <li>Premium sound and visual experience</li>
                <li>Optional catering services (additional cost)</li>
              </ul>
            </div>
            
            <div className="info-section">
              <h3>Booking Policy:</h3>
              <ul>
                <li>Minimum booking duration: 2 hours</li>
                <li>Cancellations must be made 48 hours in advance for full refund</li>
                <li>Maximum capacity varies by location</li>
                <li>Additional cleaning fee may apply for groups over 20 people</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivateBooking;