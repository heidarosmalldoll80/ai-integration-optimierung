const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/ai-integration';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.error('MongoDB Verbindungsfehler:', err));

// Setup simple API endpoints
app.get('/', (req, res) => {
  res.send('Willkommen zur AI-Integration Optimierung API');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});