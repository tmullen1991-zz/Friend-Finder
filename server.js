// Dependencies
var express = require("express");
var path = require("path");

// Express setup
var app = express();
var PORT = process.env.PORT || 3000;

// Express parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listen
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
