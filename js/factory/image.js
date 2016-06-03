define(function() {
    'use strict';

    var Image = function(attributes) {
        this.width = attributes.width || 0;
        this.height = attributes.height || 0;
    };

    return Image;
});

