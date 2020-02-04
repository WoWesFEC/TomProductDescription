const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  console.log('get request received');
  res.send('hello cruel world of Docker');
});

app.get('/dogs', (req, res) => {
  console.log('dogs request received');
  res.send(['pongo', 'perdita']);
})

app.listen(PORT, () => {
  console.log(`yippie-kay-yay, now listening on port ${PORT}`);
})