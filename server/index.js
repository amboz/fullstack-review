const express = require('express');
const bodyParser = require('body-parser');
const getUsers = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// This route should take the github username provided
// and get the repo information from the github API, then
// save the repo information in the database
app.post('/repos', function (req, res) {
  getUsers.getReposByUsername(req.body.query)
  .then((reposArr) => {
    let promiseArr = [];
    for (var i = 0; i < reposArr.length; i++) {
      promiseArr.push(db.save(reposArr[i]));
    }
    Promise.all(promiseArr)
    .then(() => {
      console.log('doneeee');
      res.status('201');
      res.end();
    })
  })

  //sending response before async fxn above complete
});

// This route should send back the top 25 repos
app.get('/repos', function (req, res) {
  console.log('server GET happened!!')
  db.grabTopRepos()
  .then((repoArr) => {
    // console.log(repoArr);
    res.status(200).send(repoArr);
  });
  // res.end();
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

