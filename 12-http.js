const http = require('http');
const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our page');

    }
    if (req.url === '/about') {
        res.end('This is our about page');
    }
    res.end(`<h1>Oops not found!</h1>
    <a href="/">Go back</a>`);
})
server.listen(5000);