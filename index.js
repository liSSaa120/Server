const http = require('http');

let Server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end('<h1>Привет, Октагон!</h1>');
});

Server.listen(3000, 'localhost');