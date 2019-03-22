const express = require('express');
const router = express.Router();

const contents = [
    {id: '1', title: 'Linux'},
    {id: '2', title: 'Debian', parent: '1'},
    {id: '3', title: 'Instalacion', content: 'This is the content of instalacion', parent: '2'},
    {id: '5', title: 'MySQL', content: '## Thidsf ds fds fd fdsf ds fdsf ds fdsfstalacion\n  askjdhjsdhasdhkasdhkjashdkjasd\n  hjashjasdgagsdhjasgdhjasd', parent: '2'},
    {id: '4', title: 'GraphQl'},
];

/* GET contents listing. */
router.get('/', function(req, res, next) {
    for (const content of contents) {
        content.children = contents.filter(c => c.parent === content.id);
    }

    const firstParents = contents.filter(content => !content.parent);

    res.status(200).send({
        contents: firstParents
    })
});

/* POST contents listing. */
router.post('/', function(req, res, next) {
    const { content } = req.body;
    content.id = Math.random(100000) + '';
    contents.push(content);
    res.status(200).send({
        content
    })
});

/* PUT contents listing. */
router.put('/', function(req, res, next) {
    const { content } = req.body;
    const c = contents.find(c => c.id === content.id);
    if (c) {
        if (content.title) {
            c.title = content.title;
        }
        if (content.content) {
            c.content = content.content;
        }
        res.status(200).send({
            content: c
        });
    } else {
        res.status(404);
    }
    
});

module.exports = router;
