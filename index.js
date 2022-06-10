const express = require('express');
const app = express();
const port = 3000;
const sortByFrequency = require('./functions/sortByFrequency');

app.use(express.json());
app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/sortByFrequency', (req, res) => {
  let { input } = req.body;
  const result = sortByFrequency(input);
  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});