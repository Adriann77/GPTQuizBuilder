const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5173; // Możesz wybrać inny port, jeśli 5173 jest już używany

app.use(cors());
app.use(bodyParser.json());

app.post('/api/quizFetcher', (req, res) => {
  console.log(req.body); // Logowanie ciała żądania dla debugowania
  // Tutaj możesz dodać logikę przetwarzania żądania
  res.status(200).json({ message: 'Data received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
