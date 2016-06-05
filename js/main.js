require(
        ['factory/init', 'pubSub/init'],
            function(factory, pubSub) {
                'use strict';

                var examples = {
                    factory: factory,
                    pubSub: pubSub
                };

                window.runExample = function (example) {
                    examples[example].init(); 
                }
            }
        );
