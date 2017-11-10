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

  return new Promise((resolve, reject) => {
    request(options, function(err, res, body) {
      if (!err && res.statusCode == 200) {
        var repos = JSON.parse(body);
        resolve(repos);
      }
    })
  });
  
      // console.log(repos);
      // console.log('repos for user', repos.length);


      //iterate over each obj in arr
        //create promise
          //push to temp arr

      //Promise.all(tempArr)
        //--> resolve once all promises inside have resolved

      // Promise.all(body);

      // for (var i = 0; i < repos.length; i++) {
      //   //saves each repo individually
      //   saveFunc.save(repos[i])
      // }
  //   }
  // });
}

module.exports.getReposByUsername = getReposByUsername;