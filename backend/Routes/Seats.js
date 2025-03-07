const express = require("express");
const cors = require("cors");
const Seats = express.Router();
const db = require('../Middleware/Database');

const execute_query = async(query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};
Seats.post("/book_seats", async(req, res) => {
    const { seats, show_id } = req.body;

    if (!seats || seats.length === 0 || !show_id) {
        return res.status(400).json({ message: "Invalid request data" });
    }

    try {
        const placeholders = seats.map(() => '?').join(',');
        const query = `SELECT seat_number FROM seat WHERE show_id = ? AND seat_number IN (${placeholders})`;
        const params = [show_id, ...seats];

        const bookedSeats = await execute_query(query, params);
        if (bookedSeats.length > 0) {
            const alreadyBooked = bookedSeats.map(seat => seat.seat_number);
            return res.status(403).json({ message: "Some seats are already booked", seats: alreadyBooked });
        }


        const insertQuery = `INSERT INTO seat (show_id, seat_number) VALUES ${seats.map(() => '(?, ?)').join(',')}`;
        const insertParams = seats.flatMap(seat => [show_id, seat]);
        await execute_query(insertQuery, insertParams);

        res.status(200).json({ message: "Seats booked successfully" });
    } catch (error) {
        console.error("Error booking seats:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

Seats.get("/seats_booked", async(req, res) => {
    try {

        const { show_id } = req.query;

        // Use query for GET requests
        if (!show_id) {
            return res.status(400).json({ error: "show_id is required" });
        }
        const query = "SELECT seat_number FROM seat WHERE show_id=?";
        const result = await execute_query(query, [show_id]);
        console.log(result)
        res.status(200).json(result);
    } catch (error) {
        console.error('Database query failed:', error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = Seats;