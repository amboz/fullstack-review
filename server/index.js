const express = require('express');
const bodyParser = require('body-parser');
const getUsers = require('../helpers/github.js')
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// use your getReposByUsername function to fetch the specified user's Github repos,
// then use your save function to store the repo information in database.
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  getUsers.getReposByUsername(req.body.query);  

  res.status('201');
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

