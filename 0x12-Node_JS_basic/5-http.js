const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.writeHead(200);
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    res.writeHead(200);
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(String(process.argv.slice(2)));
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.writeHead(404);
      res.end(error.message);
    }
  }
  res.end();
});
app.listen(port);
module.exports = app;
