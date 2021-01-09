const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(String(process.argv.slice(2)))
      .then((subjects) => {
        res.write('This is the list of our students\n');
        res.write(`${subjects}`);
        res.end();
      })
        .catch((error) => { throw error; });
  }
});
app.listen(port);
module.exports = app;
