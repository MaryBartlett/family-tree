
require('jasmine-expect');

var index = require.context("./", true, /\-test$/),

    runTests = function (testList) {
        'use strict';
        testList.map(function (tests) {
            tests.keys().forEach(tests);
        });
    };

runTests([ index ]);
