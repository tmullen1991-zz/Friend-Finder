// Load Data
var friends = require("../data/friends");

// Routing
module.exports = function(app) {
  //get
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // Post
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
  });
};
