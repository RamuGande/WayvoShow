const express = require('express');
const vendorRouter = express.Router();
const code_generator = require('../Middleware/Generate_show_id')
vendorRouter.post('/add_Show', (req, res) => {
    const { theater_name, movie, date1, time1, location } = req.body;
    if (!theater_name || !movie || !date1 || !time1) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const id = code_generator(location, theater_name, movie, );
    console.log(id);
    res.json({ showId: id });
});
module.exports = vendorRouter;