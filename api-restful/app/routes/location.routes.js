var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "Welcome to BdB" });
  });

module.exports = router;