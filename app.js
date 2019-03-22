const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

if (process.env.ENVIRONMENT === 'prod') {
    const content = require('./routes/content');
    app.use('/api/v1/contents', content);
} else {
    const contentFake = require('./routes/contentFake');
    app.use('/api/v1/contents', contentFake);
}

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

module.exports = app;
