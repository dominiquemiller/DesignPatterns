define(function(require) {
    'use strict';

    var pubSub = require('pubSub/pubsub');

    return {
        publishEvent: function () {
            var data = {
                stuff: 'awesome data'
            }
            pubSub.publish('awesome sauce', data);
        }
    };
});

