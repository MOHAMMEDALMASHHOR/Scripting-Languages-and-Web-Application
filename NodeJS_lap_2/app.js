const http = require('http');
const fs = require('fs');

fs.readFile('index.html', (err, html) => {
  if (err) throw err;

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log("HTML server running at http://127.0.0.1:3000/");
  });
});
