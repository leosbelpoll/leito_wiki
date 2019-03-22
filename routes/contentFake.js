const express = require('express');
const router = express.Router();

/* GET contents listing. */
router.get('/', function(req, res, next) {
    const contents = [
        {id: '1', title: 'Linux'},
        {id: '2', title: 'Debian', parent: '1'},
        {id: '3', title: 'Instalacion', content: 'This is the content of instalacion', parent: '2'},
        {id: '5', title: 'MySQL', content: '## Thidsf ds fds fd fdsf ds fdsf ds fdsfstalacion\n  askjdhjsdhasdhkasdhkjashdkjasd\n  hjashjasdgagsdhjasgdhjasd', parent: '2'},
        {id: '4', title: 'GraphQl'},
    ];

    for (const content of contents) {
        content.children = contents.filter(c => c.parent === content.id);
    }

    const firstParents = contents.filter(content => !content.parent);

    res.send({
        contents: firstParents
    })
});

module.exports = router;
