// server.js
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to School API!' });
});

// Example GET route
app.get('/students', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Student');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example POST route
app.post('/students', async (req, res) => {
  const { name, email, phone, date_of_birth } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO Student (name, email, phone, date_of_birth) VALUES (?, ?, ?, ?)',
      [name, email, phone, date_of_birth]
    );
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route with URL parameter
app.get('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM Student WHERE student_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Student not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, date_of_birth } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  try {
    const [result] = await db.query(
      'UPDATE Student SET name=?, email=?, phone=?, date_of_birth=? WHERE student_id=?',
      [name, email, phone, date_of_birth, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'Student updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('DELETE FROM student WHERE student_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Student not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




// Example GET route
app.get('/teachers', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM teacher');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example POST route
app.post('/teachers', async (req, res) => {
  const { name, email, department } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO teacher (name, email, department) VALUES (?, ?, ?)',
      [name, email, department]
    );
    res.json({ id: result.insertId, name, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route with URL parameter
app.get('/teachers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM teacher WHERE teacher_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'teacher not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put('/teachers/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, department } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  try {
    const [result] = await db.query(
      'UPDATE teacher SET name=?, email=?, department=? WHERE teacher_id=?',
      [name, email, department, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Student not found' });
    res.json({ message: 'teacher updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/teachers/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('DELETE FROM teacher WHERE teacher_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'teacher not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Example GET route
app.get('/courses', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM course');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example POST route
app.post('/courses', async (req, res) => {
  const { course_name, credits, teacher_id } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO course (course_name, credits, teacher_id) VALUES (?, ?, ?)',
      [course_name, credits, teacher_id]
    );
    res.json({ id: result.insertId, course_name, credits });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route with URL parameter
app.get('/courses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM course WHERE teacher_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'course not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put('/courses/:id', async (req, res) => {
  const { id } = req.params;
  const { course_name, credits, teacher_id } = req.body;
  if (!course_name || !credits) {
    return res.status(400).json({ error: 'course_Name and credits are required' });
  }
  try {
    const [result] = await db.query(
      'UPDATE course SET course_name=?, credits=?, teacher_id=? WHERE course_id=?',
      [course_name, credits, teacher_id, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'course not found' });
    res.json({ message: 'course updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/courses/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('DELETE FROM course WHERE course_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'course not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





// Example GET route
app.get('/enrollments', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM enrollment');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example POST route
app.post('/enrollments', async (req, res) => {
  const { student_id, course_id, grade } = req.body;
  try {
    const [result] = await db.query(
      'INSERT INTO enrollment (student_id, course_id, grade) VALUES (?, ?, ?)',
      [student_id, course_id, grade]
    );
    res.json({ id: result.insertId, student_id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example route with URL parameter
app.get('/enrollments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM enrollment WHERE enrollment_id= ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'enrollment not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.put('/enrollments/:id', async (req, res) => {
  const { id } = req.params;
  const { student_id,course_id, grade} = req.body;
  if (!student_id || !course_id) {
    return res.status(400).json({ error: 'student_id and course_id are required' });
  }
  try {
    const [result] = await db.query(
      'UPDATE enrollment SET student_id=?, course_id=?, grade=? WHERE enrollment_id=?',
      [student_id, course_id, grade, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'enrollment not found' });
    res.json({ message: 'enrollment updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/enrollments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('DELETE FROM enrollment WHERE enrollment_id = ?', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'enrollment not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
