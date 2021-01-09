const fs = require('fs');

const countStudents = (aPath) => {
  const promise = (response, reject) => {
    fs.readFile(aPath, (error, data) => {
      if (error) reject(Error('Cannot load the database'));
      if (data) {
        let rows = data.toString().split('\n');
        rows = rows.slice(1, rows.length - 1);
        console.log(`Number of students: ${rows.length}`);
        const subjects = {};
        for (const row of rows) {
          const student = row.split(',');
          if (!subjects[student[3]]) subjects[student[3]] = [];
          subjects[student[3]].push(student[0]);
        }
        for (const subject in subjects) {
          if (subject) console.log(`Number of students in ${subject}: ${subjects[subject].length}. List: ${subjects[subject].join(', ')}`);
        }
      }
      response();
    });
  };
  return new Promise(promise);
};
module.exports = countStudents;
