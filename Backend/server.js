const http = require('http');
const app = require('./app'); // using express app from app.js
const port = process.env.PORT || 3000; // use environment variable PORT or default to 3000  
const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});