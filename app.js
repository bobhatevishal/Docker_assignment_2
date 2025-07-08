const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const message = 'Hello from Node.js app with VOLUME and NETWORK!\n';
  fs.appendFileSync('/data/requests.log', message);
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
