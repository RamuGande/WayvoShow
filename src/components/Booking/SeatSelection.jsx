import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SeatSelection.css';

const SeatSelection = ({ n, bookedSeats = [] }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const confirmBooking = () => {
    alert(`Seats booked: ${selectedSeats.join(', ')}`);
    setSelectedSeats([]);
  };

  return (
    <div className="seat-selection-container">
      <div className="seat-grid">
        {Array.from({ length: n }, (_, row) => (
          <div key={row} className="seat-row">
            {Array.from({ length: n }, (_, col) => {
              const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
              const isBooked = bookedSeats.includes(seat);
              return (
                <motion.button
                  key={col}
                  onClick={() => toggleSeat(row, col)}
                  whileTap={{ scale: 0.9 }}
                  disabled={isBooked}
                  className={`seat-button ${
                    isBooked
                      ? 'seat-booked'
                      : selectedSeats.includes(seat)
                      ? 'seat-selected'
                      : 'seat-available'
                  }`}
                >
                  {seat}
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="seat-info">
        <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
        {selectedSeats.length > 0 && (
          <button onClick={confirmBooking} className="confirm-button">
            Confirm Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default SeatSelection;
