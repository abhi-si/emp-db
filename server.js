const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Enable all CORS requests
app.use(cors());

app.use(express.static(path.join(__dirname)));

// Route to serve data.json
app.get('/data', (req, res) => {
  // Assuming data.json is in the same directory as index.js
  const filePath = path.join(__dirname, 'data.json');
  
  // Read the JSON file
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(err.status).end();
    } else {
      console.log('File sent successfully');
    }
  });
});

// Start the server
const PORT = 3000;
// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
