const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home.ejs');
});

router.post('/', (req, res) => {
  console.log(req.body.search);
  res.render('home.ejs');
});

module.exports = router;
