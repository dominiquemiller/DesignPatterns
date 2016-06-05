
    'use strict';

    var express = require('express');
    var bodyParser = require('body-parser');
    var BookController = require('controllers/bookcontroller');
    var app = express();

    var port = 6000;
    
    app.use(bodyParser.json());
    
    app.listen(port, function(error) {
        console.log("Express server started on " + port);
    });

    app.post('/', BookController.create);

    

