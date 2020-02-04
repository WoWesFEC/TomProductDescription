const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  let productId = req.query.ID || 48;
  db.getAllItemInfo(productId, (err, itemInfo) => {
    if (err) {
      console.log('error getting info from db');
      res.send(err);
    }
    res.send(itemInfo);
  })
});

/*
app.get('/dogs', (req, res) => {
  console.log('dogs request received');
  let productId = req.query.ID || 48;
  console.log(req.query.ID);
  db.getAllItemInfo(productId, (err, itemInfo) => {
    console.log('item info is', itemInfo);
    console.log('sending itemInfo to server');
    res.send(itemInfo);
  })
});
*/

app.listen(PORT, () => {
  console.log(`yippie-kay-yay, now listening on port ${PORT}`);
})