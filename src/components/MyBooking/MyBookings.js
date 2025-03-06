import React, { useState } from 'react';
import { Camera, Edit2, Check, X, Ticket, User, Mail, Phone, MapPin, Menu } from 'lucide-react';
import './UserProfile.css';
import './MyBooking.css';


function MyBookings() {
  const [showBookings, setShowBookings] = useState(false);

  const bookings = [
    {
      title: "Mazaka",
      language: "Telugu",
      date: "Wed, 26 Feb, 2025 | 02:45 PM",
      venue: "Asian Lakshmikala Cinepride: Moosapet",
      ticketInfo: "1 ticket (S): SILVER - D15",
      status: "FINISHED",
      image: "https://via.placeholder.com/100", 
    },
    {
      title: "Return of the Dragon",
      language: "Telugu",
      date: "Tue, 25 Feb, 2025 | 09:45 PM",
      venue: "Bhramaramba 70MM A/C 4K Dolby: Kukatpally",
      ticketInfo: "6 tickets (S): FIRST CL - D16",
      status: "FINISHED",
      image: "https://via.placeholder.com/100",
    },
    {
      title: "Interstellar",
      language: "English",
      date: "Mon, 10 Feb, 2025 | 07:45 PM",
      venue: "Prasads Multiplex: Hyderabad",
      ticketInfo: "1 ticket (S): GOLD - B34 | SCREEN 6",
      status: "FINISHED",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="bookings-container">
      <h1 className="title">My Bookings</h1>
      <button className="toggle-btn" onClick={() => setShowBookings(!showBookings)}>
        {showBookings ? "Hide Bookings" : "Show My Bookings"}
      </button>

      {showBookings && (
        <div className="bookings-list">
          {bookings.map((booking, index) => (
            <div key={index} className="booking-card">
              <img src={booking.image} alt={booking.title} className="booking-image" />
              <div className="booking-info">
                <h2 className="booking-title">{booking.title}</h2>
                <p className="booking-language">{booking.language}</p>
                <p className="booking-date">{booking.date}</p>
                <p className="booking-venue">{booking.venue}</p>
                <p className="booking-ticket">{booking.ticketInfo}</p>
                <span className={`booking-status ${booking.status.toLowerCase()}`}>
                  {booking.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default MyBookings;