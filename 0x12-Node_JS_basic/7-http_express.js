const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', ((req, res) => {
 countStudents(String(process.argv.slice(2)))
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(`${data}`);
      res.end();
    })
    .catch((error) => { 
      res.end(error.message);
    });
}));
app.listen(port);
module.exports = app;
