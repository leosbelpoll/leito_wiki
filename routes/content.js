const express = require('express');
// var pgp = require("pg-promise")();
// var db = pgp(process.env.DATABASE_URL);
const router = express.Router();

/* GET contents listing. */
router.get('/', function(req, res, next) {
    res.send({
        contents: [
            {id: '1', title: 'Linux'},
            {id: '2', title: 'Debian', parent: '1'},
            {id: '3', title: 'Instalacion', content: 'This is the content of instalacion', parent: '2'},
            {id: '4', title: 'GraphQl'},
        ]
    })
});

module.exports = router;
