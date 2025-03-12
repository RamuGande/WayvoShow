const express = require('express');
const vendorRouter = express.Router();
const code_generator = require('../Middleware/Generate_show_id');
const db = require('../Middleware/Database');

const execute_query = async(query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// Route to add a new show
vendorRouter.post('/add_Show', async(req, res) => {
    const { movie_name, show_date, show_time, Image, price, location, theater_id } = req.body;
    console.log(req.body)
    if (!theater_id || !movie_name || !show_date || !show_time) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const show_id = code_generator(location, theater_id, movie_name);
        const newShow = {
            show_id,
            theater_id,
            movie_name,
            show_date,
            show_time,
            location,
            price

        };

        const result = await execute_query('INSERT INTO show_table SET ?', newShow);
        res.status(200).json({ message: 'Show added successfully', show_id });
    } catch (error) {
        console.error('Error adding show:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to get theaters by city
vendorRouter.get('/theaters/:city', async(req, res) => {
    const { city } = req.params;

    try {
        const theaters = await execute_query('SELECT theater_id, theater_name FROM theater WHERE city = ?', [city]);
        res.status(200).json(theaters);
    } catch (error) {
        console.error('Error fetching theaters:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = vendorRouter;