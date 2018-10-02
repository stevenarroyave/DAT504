const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses/:id', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on port 3000'));


// const courses = [
//   {id: 1, mane: 'course1'},
//   {id: 2, mane: 'course2'},
//   {id: 3, mane: 'course3'},
// ];
//
// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find(c => c.id === parseInt (req.params.id));
//   if (!course) res.status(404).send('Not found');
//   res.send(course);
// } );
