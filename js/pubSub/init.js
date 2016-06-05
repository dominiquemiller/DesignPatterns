define(function(require) {
    'use strict';

    return {
        init: function() {
            var moduleA = require('pubSub/moduleA'),
            moduleB = require('pubSub/moduleB');

            moduleB.publishEvent();
        }
    };
});
