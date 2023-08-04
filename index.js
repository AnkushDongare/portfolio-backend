const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); //Require the dotenv package
const fs = require("fs");
const path = require("path"); // Add the missing import for the path module
const app = express();
dotenv.config(); // Load environment variables from .env

const port = process.env.PORT || 3001;
// Middleware: CORS
app.use(cors());

// Middleware: JSON parsing
app.use(express.json());

const dataFilePath = path.join(__dirname, 'data.json');

app.get('/api/data', async (req, res) => {
  try {
    const jsonData = await fs.promises.readFile(dataFilePath, 'utf8');
    res.json(JSON.parse(jsonData));
  } catch (error) {
    console.error('Error reading data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
