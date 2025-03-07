const express = require('express');
const bodyParser = require('body-parser');
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


module.exports = Theater;