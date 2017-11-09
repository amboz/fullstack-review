const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  owner: {
    login: String,
    id: Number,
    avatar_url: String,
    repos_url: String,
  },
  private: Boolean,
  html_url: String,
  description: String,
  url: String,
  created_at: Date,
  updated_at: Date,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoObj) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //iterate over array of repos
  // var newDocs = [];
  // for (var i = 0; i < responsebody.length; i++) {
  //   newDocs.push(n)
  // }

  console.log('reached save!')

  let createdRepo = new Repo({
    id: repoObj.id,
    name: repoObj.name,
    full_name: repoObj.full_name,
    owner: {
      login: repoObj.owner.login,
      id: repoObj.owner.id,
      avatar_url: repoObj.owner.avatar_url,
      repos_url: repoObj.owner.repos_url,
    },
    private: repoObj.private,
    html_url: repoObj.html_url,
    description: repoObj.description,
    url: repoObj.url,
    created_at: repoObj.created_at,
    updated_at: repoObj.updated_at,
    watchers: repoObj.watchers
  })

  createdRepo.save(function(err) {
    if (err) {
      console.log(err);
    }
  });
// Ensure there are no duplicate repos. If you happen to import the same repo twice, 
// it should only show up once in your database.
// See the tips section about considering unique columns.
}

module.exports.save = save;