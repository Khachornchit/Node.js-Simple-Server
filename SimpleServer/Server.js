var http = require('http');
var port = 5000;
var server = http.createServer(engine);
server.listen(port, function () {
    console.log('Start Simple Server Port: ' + port);
});

function engine(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain', 'Website':'www.plutosols.com'});
    response.end('Start Simple Server Port: ' + port);
};