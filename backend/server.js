const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));
app.use(bodyParser.json());

// Route to serve the page
app.get(['/admin', '/login'], (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Connect to SQLite database
const db = new sqlite3.Database('messages.db');

// Create messages table if not exists
db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, message TEXT)');

// API endpoint to store messages
app.post('/api/messages', (req, res) => {
  const { email, message } = req.body;
  const query = 'INSERT INTO messages (email, message) VALUES (?, ?)';
  
  db.run(query, [email, message], function (err) {
    if (err) {
      console.error('Error storing message:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.json({ success: true, message: 'Message stored successfully!', messageId: this.lastID });
    }
  });
});

// API endpoint to fetch messages
app.get('/api/messages', (req, res) => {
  const query = 'SELECT * FROM messages';

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching messages:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    } else {
      res.json(rows);
    }
  });
});

// Function to generate JWT token
function generateToken(payload) {
  return jwt.sign(payload, 'o7fZxR2nE#b!', { expiresIn: '1h' });
}

// Express.js backend route for handling login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check username and password against hardcoded values
  if (username === 'admin' && password === 'password') {
    // Generate and send JWT token
    const token = generateToken({ username });
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
