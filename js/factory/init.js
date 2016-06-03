define(function(require) {
    'use strict';

    return {
        init: function() {

            var myVideo, myImage, myBook, myComic,
                mediaFactory = require('factory/mediaFactory');

            myVideo = mediaFactory.createMedia('Video', {
                      length: 3.5,
                      name: 'My Video'
            });

            myImage = mediaFactory.createMedia('Image', {
                      width: 100,
                      height: 100,
                      name: 'My image'
            });

            myBook = mediaFactory.createMedia('Book', {
                     title: 'My stupid book',
                     author: 'me'
            });

            myComic = mediaFactory.createMedia('ComicBook', {
                      title: "Spider people from Marz!",
                      author: 'me'
             });

            console.log(myVideo);
            console.log(myImage);
            console.log(myBook);
            console.log(myComic);

            }
        };

    });
