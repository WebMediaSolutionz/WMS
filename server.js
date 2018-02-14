// port number to be used, any unused port number will do here.
const portNumber = 80;

// loading relevant packages
const express = require('express');
const bodyParser = require('body-parser');

// app definition
const app = express();

// middleware: makes server be able to receive json objects
app.use(bodyParser.json());

// middleware: defining static files, public folder
app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
    res.redirect('/');
});

// Launch Node Server
let server = app.listen(portNumber, () => {
    console.log(`Express Server listening on port ${server.address().port}...`);
});