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