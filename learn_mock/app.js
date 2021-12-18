var restify = require('restify');
let fk = require('./faker')

var server = restify.createServer();

server.use(restify.plugins.queryParser());

server.listen(8887, function() {
  console.log('%s listening at %s', server.name, server.url);
});


server.get('/product', (req,res,next) => {
  console.log(req.headers)
    let limit = parseInt(req.query.limit,10)||10
    res.send(fk.product(limit))
});