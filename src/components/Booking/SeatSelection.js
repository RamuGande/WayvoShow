import React, { useState, useEffect, useCallback } from 'react';
// import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import './SeatSelection.css';

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatsBooked, setSeatsBooked] = useState([]);
    const { showId } = useParams();
    const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
    const seatsPerRow = 8;

    useEffect(() => {
        console.log('showId from useParams:', showId);
    }, [showId]);

    const booked = useCallback(async () => {
        if (!showId) {
            console.warn('showId is undefined');
            return;
        }
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }
            const result = await fetch(`${process.env.REACT_APP_API_URL}/seats/seats_booked?show_id=${showId}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!result.ok) {
                console.error('Failed to fetch seats:', result.status);
                return;
            }
            const data = await result.json();
            const seatNumbers = data.map(seat => seat.seat_number);
            setSeatsBooked(seatNumbers);
            console.log('Fetched booked seat numbers:', seatNumbers);
        } catch (error) {
            console.error('Error fetching booked seats:', error);
        }
    }, [showId]);

    useEffect(() => {
        if (showId) {
            booked();
        }

        return () => {
            setSeatsBooked([]);
        };
    }, [showId, booked]);

    const handleSeatSelection = (seatId) => {
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(seat => seat !== seatId)
                : [...prev, seatId]
        );
    };

    const handlePurchase = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found in localStorage');
                return;
            }
            const result = await fetch(`${process.env.REACT_APP_API_URL}/seats/book_seats`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
body: JSON.stringify({ seats: selectedSeats, show_id: showId }) // Use show_id instead of show_Id
            });
            if (!result.ok) {
                console.error('Failed to book seats:', result.status);
                return;
            }
            console.log('Seats booked successfully');
            setSelectedSeats([]);
            booked();
        } catch (error) {
            console.error('Error booking seats:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Selected seats:', selectedSeats);
    };

    const isDisabled = (seatId) => seatsBooked.includes(seatId);

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
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
                                            disabled={isDisabled(seatId)}
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
                onClick={handlePurchase}
                type="button"
                className="confirm-button"
                disabled={selectedSeats.length === 0}
            >
                Confirm Booking
            </button>
        </form>
    );
};

export default SeatSelection;
