const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database('messages.db');

// Create messages table if not exists
db.run('CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, message TEXT)');

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

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
