define(function(require){
    'use strict';

    var pubSub = require('pubSub/pubsub');
    console.log(pubSub);
    var subscription;
    
    subscription = pubSub.subscribe('awesome sauce', function(data) {
                     console.log('awesome sauce was created with this data: ' + data.stuff);
                     subscription.dispose();
                    });
});
