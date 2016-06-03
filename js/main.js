require(
        [],
            function() {
                'use strict';

                var examples = {};

                window.runExample = function (example) {
                    example[example].init(); 
                }
            }
        );
