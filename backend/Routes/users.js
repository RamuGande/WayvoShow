const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('../Middleware/Database');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const Seats = require("./Seats")
app.use("/seats", Seats)
const vendorRouter = require('./Vendors');
app.use('/Vendors', vendorRouter);
const Theater = require("./Theater_Generation")
app.use("/Theater_generation", Theater)
    // Helper function to execute database queries
const execute_query = async(query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    const query = "SELECT username, password FROM user WHERE username = ?";

    try {
        const results = await execute_query(query, [username]);
        if (results.length === 0) return res.status(401).send("Check your username or password");

        const hashedPassword = results[0].password;
        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (!isMatch) return res.status(401).send("Check your username or password");

        res.status(200).send("Logged In");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

app.post('/signup_user', async(req, res) => {
    const { username, email, password, cnfpassword } = req.body;

    if (password !== cnfpassword) return res.status(400).send("Passwords must match");

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) return res.status(400).send("Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.");

    try {
        const existingUser = await execute_query("SELECT username FROM user WHERE username = ?", [username]);
        if (existingUser.length > 0) return res.status(409).send("Username already exists");

        const existingEmail = await execute_query("SELECT email FROM user WHERE email = ?", [email]);
        if (existingEmail.length > 0) return res.status(409).send("Email already exists");

        const hashedPassword = await bcrypt.hash(password, 10);
        const insertQuery = "INSERT INTO user (username, password, user_type, email) VALUES (?, ?, ?, ?)";

        await execute_query(insertQuery, [username, hashedPassword, "Customer", email]);
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during signup");
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));