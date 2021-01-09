const http = require('http');

const countStudents = require('./3-read_file_async');
const port = 1245;

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  }
  if (req.method === 'GET' && req.url === '/students') {
    countStudents(String(process.argv.slice(2)))
      .then((subjects) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${subjects.count}\n`);
        for (const subject in subjects) {
          if (subject) res.write(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}\n`);
        }
        res.end();
      })
      .catch((error) => { throw error; });
  }
});
app.listen(port);
module.exports = app;
