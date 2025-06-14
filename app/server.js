const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js behind NGINX!');
});

server.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
