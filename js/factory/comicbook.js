define(function() {
    'use strict';

    var ComicBook = function(attributes){
        this.title = attributes.title || '';
        this.author = attributes.author || '';
    };
    
    return ComicBook;
});
