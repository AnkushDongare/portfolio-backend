const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv"); // Require the dotenv package
const fs = require("fs");
const app = express();
dotenv.config(); // Load environment variables from .env

const port = process.env.PORT || 6000;
// Middleware: CORS
app.use(cors());

app.use(express.json());

// Routes for different combinations
app.get("/shooting-results/open-sight/urban/male/u14", (req, res) => {
  readAndSendData("Urban-OpenSight-Male-U14.json", res);
});

app.get("/shooting-results/open-sight/urban/male/u17", (req, res) => {
  readAndSendData("Urban-OpenSight-Male-U17.json", res);
});

app.get("/shooting-results/open-sight/urban/male/u19", (req, res) => {
  readAndSendData("Urban-OpenSight-Male-U19.json", res);
});

app.get("/shooting-results/open-sight/urban/female/u14", (req, res) => {
  readAndSendData("Urban-OpenSight-Female-U14.json", res);
});

app.get("/shooting-results/open-sight/urban/female/u17", (req, res) => {
  readAndSendData("Urban-OpenSight-Female-U17.json", res);
});

app.get("/shooting-results/open-sight/urban/female/u19", (req, res) => {
  readAndSendData("Urban-OpenSight-Female-U19.json", res);
});

app.get("/shooting-results/pip-sight/urban/male/u14", (req, res) => {
  readAndSendData("Urban-PipSight-Male-U14.json", res);
});

app.get("/shooting-results/pip-sight/urban/male/u17", (req, res) => {
  readAndSendData("Urban-PipSight-Male-U17.json", res);
});

app.get("/shooting-results/pip-sight/urban/male/u19", (req, res) => {
  readAndSendData("Urban-PipSight-Male-U19.json", res);
});

app.get("/shooting-results/pip-sight/urban/female/u14", (req, res) => {
  readAndSendData("Urban-PipSight-Female-U14.json", res);
});

app.get("/shooting-results/pip-sight/urban/female/u17", (req, res) => {
  readAndSendData("Urban-PipSight-Female-U17.json", res);
});

app.get("/shooting-results/pip-sight/urban/female/u19", (req, res) => {
  readAndSendData("Urban-PipSight-Female-U19.json", res);
});

app.get("/shooting-results/pistol/urban/male/u14", (req, res) => {
  readAndSendData("Urban-Pistol-Male-U14.json", res);
});

app.get("/shooting-results/pistol/urban/male/u17", (req, res) => {
  readAndSendData("Urban-Pistol-Male-U17.json", res);
});

app.get("/shooting-results/pistol/urban/male/u19", (req, res) => {
  readAndSendData("Urban-Pistol-Male-U19.json", res);
});

app.get("/shooting-results/pistol/urban/female/u14", (req, res) => {
  readAndSendData("Urban-Pistol-Female-U14.json", res);
});

app.get("/shooting-results/pistol/urban/female/u17", (req, res) => {
  readAndSendData("Urban-Pistol-Female-U17.json", res);
});

app.get("/shooting-results/pistol/urban/female/u19", (req, res) => {
  readAndSendData("Urban-Pistol-Female-U19.json", res);
});

app.get("/shooting-results/open-sight/rural/male/u14", (req, res) => {
  readAndSendData("Rural-OpenSight-Male-U14.json", res);
});

app.get("/shooting-results/open-sight/rural/male/u17", (req, res) => {
  readAndSendData("Rural-OpenSight-Male-U17.json", res);
});

app.get("/shooting-results/open-sight/rural/male/u19", (req, res) => {
  readAndSendData("Rural-OpenSight-Male-U19.json", res);
});

app.get("/shooting-results/open-sight/rural/female/u14", (req, res) => {
  readAndSendData("Rural-OpenSight-Female-U14.json", res);
});

app.get("/shooting-results/open-sight/rural/female/u17", (req, res) => {
  readAndSendData("Rural-OpenSight-Female-U17.json", res);
});

app.get("/shooting-results/open-sight/rural/female/u19", (req, res) => {
  readAndSendData("Rural-OpenSight-Female-U19.json", res);
});

app.get("/shooting-results/pip-sight/rural/male/u14", (req, res) => {
  readAndSendData("Rural-PipSight-Male-U14.json", res);
});

app.get("/shooting-results/pip-sight/rural/male/u17", (req, res) => {
  readAndSendData("Rural-PipSight-Male-U17.json", res);
});

app.get("/shooting-results/pip-sight/rural/male/u19", (req, res) => {
  readAndSendData("Rural-PipSight-Male-U19.json", res);
});

app.get("/shooting-results/pip-sight/rural/female/u14", (req, res) => {
  readAndSendData("Rural-PipSight-Female-U14.json", res);
});

app.get("/shooting-results/pip-sight/rural/female/u17", (req, res) => {
  readAndSendData("Rural-PipSight-Female-U17.json", res);
});

app.get("/shooting-results/pip-sight/rural/female/u19", (req, res) => {
  readAndSendData("Rural-PipSight-Female-U19.json", res);
});

app.get("/shooting-results/pistol/rural/male/u14", (req, res) => {
  readAndSendData("Rural-Pistol-Male-U14.json", res);
});

app.get("/shooting-results/pistol/rural/male/u17", (req, res) => {
  readAndSendData("Rural-Pistol-Male-U17.json", res);
});

app.get("/shooting-results/pistol/rural/male/u19", (req, res) => {
  readAndSendData("Rural-Pistol-Male-U19.json", res);
});

app.get("/shooting-results/pistol/rural/female/u14", (req, res) => {
  readAndSendData("Rural-Pistol-Female-U14.json", res);
});

app.get("/shooting-results/pistol/rural/female/u17", (req, res) => {
  readAndSendData("Rural-Pistol-Female-U17.json", res);
});

app.get("/shooting-results/pistol/rural/female/u19", (req, res) => {
  readAndSendData("Rural-Pistol-Female-U19.json", res);
});

// Invalid route handling
app.get("*", (req, res) => {
  res.status(404).send("Invalid route");
});
// Add more routes for other JSON files as needed.

function readAndSendData(filename, res) {
  // Read data from the JSON file and send it as a response
  fs.readFile(filename, "utf8", (err, fileData) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      res.status(500).send("Error reading data. Please try again later.");
    } else {
      const data = JSON.parse(fileData);
      console.log(`Data loaded successfully from ${filename}`);
      res.send(data);
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
