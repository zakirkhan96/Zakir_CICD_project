const http = require('http');
http.createServer((req, res) => {
 res.writeHead(200);
 res.end('Hello from Jenkins Pipeline! v1\nActually it V10.');
}).listen(3000, () => console.log('Running on port 3000'));

