const http2 = require('spdy');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log(123)
  res.status(200).send("dadaf")
})

const options = {
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem'),
}

const server = http2.createServer(options, app)
server.listen(8443)