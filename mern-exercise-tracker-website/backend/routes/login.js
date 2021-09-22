const router = require("express").Router();
let Login = require("../models/login.model");

router.route("/").post((req, res) => {
  console.log("------>");
  username = req.body.username;
  password = req.body.password;
  console.log(req.body);
  // console.log(req.body.props.username);

  // Login.find().then( (login) => res.json(login) )
  // .catch( (err) => res.status(400).json("Error: " + err));

  Login.find(req.body.props)
    .then((login) => {
      res.json(login);
    })
    .catch((err) => console.log(err));
  // console.log(res.client.body);

  console.log("<-----------");
});

module.exports = router;
