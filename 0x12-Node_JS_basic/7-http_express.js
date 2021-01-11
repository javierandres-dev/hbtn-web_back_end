const express = require('express');

const app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => res.send('Hello Holberton School!');
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(process.argv[2]);
    res.send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.send(`${msg}${error.message}`);
  }
});
app.listen(1245);
module.exports = app;
