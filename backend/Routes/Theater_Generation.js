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
Theater.get("/get_theaters", async(req, res) => {
    const { owner_id } = req.body;
    const query = "Select name From theater where owner_id=?"
    const result = await execute_query(query, [owner_id])
    res.status(200).json(result);
})
Theater.post('/add-show', async(req, res) => {
    const { theater_name, owner_id, movie_name, show_date, show_time, Language, Movie_Type } = req.body;

    if (!theater_name || !owner_id || !movie_name || !show_date || !show_time) {
        return res.status(400).json({ message: 'Theater name, owner ID, movie name, show date, and show time are required' });
    }

    try {
        const theaterQuery = `SELECT theater_id FROM Theaters WHERE name = ? AND owner_id = ?`;
        const theaterResult = await execute_query(theaterQuery, [theater_name, owner_id])
        if (theaterResult.length === 0) {
            return res.status(404).json({ message: 'Theater not found for the given owner' });
        }
        const theater_id = theaterResult[0].theater_id;

        const query = `INSERT INTO show_table (theater_id, movie_name, show_date, show_time, Language, Movie_Type) VALUES (?, ?, ?, ?, ?, ?)`;
        await execute_query(query, [theater_id, movie_name, show_date, show_time, Language, Movie_Type]);

        res.status(201).json({ message: 'Show added successfully' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
Theater.get('/shows', async(req, res) => {
    const { movie_name, date, time } = req.query;
    console.log(movie_name)
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