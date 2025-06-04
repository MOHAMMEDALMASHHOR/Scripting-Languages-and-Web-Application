const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const event = new EventEmitter();

event.on('userConnected', () => {
  console.log("A user has connected.");
});

event.emit('userConnected');

const server = http.createServer((req, res) => {
  console.log(`Request received for: ${req.url}`);

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>This is Home Page</h2>');
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>This is Student Page</h2>');
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>This is Admin Page</h2>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h2>Invalid Request</h2>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log('✅ Server is running at http://localhost:5000');
  console.log('🧠 OS info:', os.platform(), os.homedir());
  console.log('📁 Current file path:', path.basename(__filename));
});
