const request = require('request');
const config = require('../config.js');
const saveFunc = require('../database/index.js')


let getReposByUsername = (username) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    method: 'GET',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, body) {
    if (!err && res.statusCode == 200) {
      var repos = JSON.parse(body);
      console.log(repos);
      console.log('repos for user', repos.length);
      for (var i = 0; i < repos.length; i++) {
        saveFunc.save(repos[i]);
      }
    }
  });
}

module.exports.getReposByUsername = getReposByUsername;