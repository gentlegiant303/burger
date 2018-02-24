let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override")

let PORT = process.env.PORT || 3000;

let app = express();


app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(methodOverride('_method'));

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burgers_controller.js");

app.use('/', routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});