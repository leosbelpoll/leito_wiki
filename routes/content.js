const express = require('express');
const pgp = require("pg-promise")();
const db = pgp(process.env.DATABASE_URL);
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

/* POST contents listing. */
router.post('/', function(req, res, next) {
    const { content } = req.body;
    db.query('INSERT INTO contents (${this:name}) VALUES(${this:csv})', content)
        .then(function (content) {
            res.json({
                content
            });
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send(error);
        });
});

/* PUT contents listing. */
router.put('/', function(req, res, next) {
    const { content: { id, title, content } } = req.body;
    db.query('UPDATE contents SET title = $2, content = $3 WHERE id = $1', [id, title, content])
        .then(function (content) {
            res.json({
                content
            });
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send(error);
        });
    
});

/* GET ALL contents listing. */
router.get('/all', function(req, res, next) {
    db.query('SELECT * FROM contents')
        .then(function (contents) {
            res.json({
                contents
            });
        })
        .catch(function (error) {
            console.error(error);
            res.status(500).send(error);
        });
});

module.exports = router;
