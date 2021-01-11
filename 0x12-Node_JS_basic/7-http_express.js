const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));
app.get('/students', ((req, res) => {
 countStudents(String(process.argv.slice(2)))
    .then((data) => {
      res.write('This is the list of our students\n');
      res.write(`${data}`);
      res.end();
    })
    .catch((error) => { throw error; });
}));
app.listen(1245);
module.exports = app;
