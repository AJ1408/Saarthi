//contains the code to connect with mongodb database using mongoose
const mongoose = require('mongoose');

console.log("Connecting to MongoDB..." , process.env.DB_CONNECT);

function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, {
    }).then(() => {
        console.log("Connected to MongoDB" , mongoose.connection.name);
    }).catch((err) => {
        console.error("Failed to connect to MongoDB", err);
    });
} 

module.exports = connectToDb;