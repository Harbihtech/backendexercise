// index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Backend Development');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
