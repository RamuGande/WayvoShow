import React, { useState } from 'react';
import './bookingform.css';

const BookingForm = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [formData, setFormData] = useState({
    theatre: '',
    showTime: '',
    date: '',
  });

  const theatres = ['PVR Cinemas', 'INOX', 'Cinepolis'];
  const showTimes = ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM', '10:00 PM'];
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;
  
  const handleSeatSelection = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(seat => seat !== seatId)
        : [...prev, seatId]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking details:', {
      ...formData,
      selectedSeats
    });
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Theatre:</label>
        <select 
          name="theatre" 
          value={formData.theatre}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Theatre</option>
          {theatres.map(theatre => (
            <option key={theatre} value={theatre}>{theatre}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Show Time:</label>
        <select 
          name="showTime" 
          value={formData.showTime}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Show Time</option>
          {showTimes.map(time => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Date:</label>
        <input 
          type="date" 
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="seat-selection">
        <h3>Select Seats</h3>
        <div className="screen">Screen</div>
        <div className="seating-grid">
          {rows.map(row => (
            <div key={row} className="row">
              {Array.from({ length: seatsPerRow }, (_, i) => {
                const seatId = `${row}${i + 1}`;
                return (
                  <label key={seatId} className="seat">
                    <input
                      type="checkbox"
                      checked={selectedSeats.includes(seatId)}
                      onChange={() => handleSeatSelection(seatId)}
                    />
                    <span>{seatId}</span>
                  </label>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <button 
        type="submit" 
        className="confirm-button"
        disabled={selectedSeats.length === 0}
      >
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm