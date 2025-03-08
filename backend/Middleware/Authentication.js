const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
const createToken = (user) => {
    return jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (roles) => (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        if (!roles.includes(decoded.role)) {
            return res.status(403).json({ message: 'Insufficient permissions' });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { createToken, verifyToken };