define(function() {
    'use strict';

    var Book = function(attributes) {
        this.title = attributes.title || '';
        this.author = attributes.author || '';
    };

    return Book;
});
