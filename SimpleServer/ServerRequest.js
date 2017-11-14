var http = require('http');
var port = 5001;
var server = http.createServer(engine);

server.listen(port, function () {
    console.log('Server was hit by request.');
})

function engine(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html', 'Website': 'www.plutosols.com' });
    response.end('Request url : ' + request.url);
}