// Import the necessary modules
const http = require('http');
const fs = require('fs');

// Create the server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Home Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Home Page');
        res.end();
    } else if (req.url === '/about') {
        // About Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the About Page');
        res.end();
    } else if (req.url === '/contact') {
        // Contact Page
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the Contact Page');
        res.end();
    } else if (req.url === '/file-write') {
        // File Write
        fs.writeFile('demo.txt', 'hello world', (err) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Failed to write file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.write('File written successfully');
            }
            res.end();
        });
    } else {
        // 404 Not Found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Page not found');
        res.end();
    }
});

// Start the server
server.listen(5500, () => {
    console.log('Server is listening on port 5500');
});