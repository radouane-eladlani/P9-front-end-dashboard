const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Magic happens on port ${PORT}`);
});
