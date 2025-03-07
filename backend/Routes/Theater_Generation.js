const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('../Middleware/Database');
const Theater = express.Router();

const execute_query = async(query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

Theater.get('/shows', async(req, res) => {
    const { movie_name, date, time } = req.query;
    console.log(date);

    if (!movie_name || !date || !time) {
        return res.status(400).json({ message: 'Movie name, date, and time are required' });
    }

    const query = `
        SELECT s.show_id, s.movie_name, s.show_time, t.name AS theater_name, t.location
        FROM show_table s
        JOIN theater t ON s.theater_id = t.theater_id
        WHERE s.movie_name = ? AND s.show_date = ? 
    `;

    try {
        const results = await execute_query(query, [movie_name, date]);
        console.log('DB Results:', results);

        if (results.length === 0) {
            return res.status(404).json({ message: 'No shows found for this movie on this date and time' });
        }
        res.status(200).json(results);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = Theater;