const express = require('express');
const router = express.Router();

/* GET contents listing. */
router.get('/', function(req, res, next) {
  res.json({
    contents: [
      {title: 'Linux'},
      {title: 'Debian'},
      {title: 'Installation'},
      {title: 'GraphQl'},
    ]
  });
});

module.exports = router;
