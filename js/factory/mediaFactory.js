define(function(require) {
    'use strict';

    var media ={
        Video: require('factory/video'),
        Image: require('factory/image'),
        Book: require('factory/book'),
        ComicBook: require('factory/comicbook')
    };

    return {
        createMedia: function(type, attributes){
            var MediaType = media[type];

            return new MediaType(attributes);
        }
    };

});
