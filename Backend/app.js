const dotenv = require('dotenv');
dotenv.config();
//importing the express module
const express = require('express');
const app = express();
// Middleware to parse JSON bodies(cors config)
const cors = require('cors');

// connect to the database
const connectToDb = require('./db/db');
connectToDb();

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes"); 
  
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/user" , userRoutes);
app.use("/captain", captainRoutes);
module.exports = app;