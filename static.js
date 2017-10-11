if (process.argv.length > 2) {
    var express = require('express');
    var path = require('path');
    var port = Number(process.argv[2]);
    var app = express();
    
    app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    app.listen(port);
}
