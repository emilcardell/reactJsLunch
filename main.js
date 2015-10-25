'use strict';
const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(__dirname + '/static'));

app.get('/*', function(req, resp) {
    resp.sendFile(path.join(__dirname+'/static/index.html'));
});

const server = app.listen(9000, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
