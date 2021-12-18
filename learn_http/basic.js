const http = require("http")

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.setHeader('Connection','close')

    //res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.end('ok');

  }).listen(9900);