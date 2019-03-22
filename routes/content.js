const express = require('express');
var pgp = require("pg-promise")();
var db = pgp(process.env.DATABASE_URL);
const router = express.Router();

/* GET contents listing. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM contents')
        .then(function (contents) {
            for (const content of contents) {
                content.children = contents.filter(c => c.parent === content.id);
            }
            const firstParents = contents.filter(content => !content.parent);

            res.json({
                contents: firstParents
            });
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send(error);
        });
});

module.exports = router;
