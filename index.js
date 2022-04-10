const express = require('express')
const app = express()

app.get('/ping', function (req, res) {
  res.send('pong')
})

const PORT = 3000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);