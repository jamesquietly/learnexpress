if (process.argv.length > 2) {
    var express = require('express');
    var port = Number(process.argv[2]);
    var app = express();

    app.get('/home', function (req, res) {
        res.end('Hello World!');
    });
    app.listen(port);
}
