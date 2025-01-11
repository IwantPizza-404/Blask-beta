const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'o7fZxR2nE#b!';

// Serve static files from the frontend dist directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));
// Parse JSON bodies
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'messages.db'));

// Create messages table if not exists
db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, message TEXT)');

// API endpoint to store messages
app.post('/api/messages', (req, res) => {
  const { email, message } = req.body;
  const query = 'INSERT INTO messages (email, message) VALUES (?, ?)';
  
  db.run(query, [email, message], function (err) {
    if (err) {
      console.error('Error storing message:', err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    res.json({ success: true, message: 'Message stored successfully!', messageId: this.lastID });
  });
});

// API endpoint to fetch messages
app.get('/api/messages', (req, res) => {
  const query = 'SELECT * FROM messages';

  db.all(query, (err, rows) => {
    if (err) {
      console.error('Error fetching messages:', err);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    res.json(rows);
  });
});

// Express.js backend route for handling login requests
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  // Check username and password (this should be improved for production use)
  if (username === 'admin' && password === 'password') {
    // Generate and send JWT token
    const token = generateToken({ username });
    return res.json({ success: true, token });
  }
  res.status(401).json({ success: false, message: 'Invalid username or password' });
});

// Function to generate JWT token
function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Catch-all route to serve index.html for all non-API requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
