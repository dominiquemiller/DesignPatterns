define(function(require){
    'use strict';

    var pubSub = require('pubSub/pubsub');
    console.log(pubSub);
    pubSub.subscribe('awesome sauce', function(data) {
        console.log('awesome sauce was created with this data: ' + data);
    });
});
