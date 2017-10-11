if (process.argv.length > 2) {
    var express = require('express');
    var fs = require('fs');
    var app = express();
    
    app.get('/books', function(req, res) {
        fs.readFile(process.argv[3], function callback(err, data) {
            if (err) return res.send(500);
            try {
                var obj = JSON.parse(data);
                res.json(obj);
            } catch(err){
                res.send(500);
            }
        });
    });
    app.listen(process.argv[2]);
}