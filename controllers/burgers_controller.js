let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});
router.put("/burgers/:id", function(req, res) {
  let isDevoured = 'id = ' + req.params.id;
  burger.updateOne({
      devoured: true
    }, isDevoured,
    function(data) {
      res.redirect("/");
    });

});

module.exports = router;