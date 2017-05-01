/* jshint node: true */

var moduleLoaders = [
        { test: /\._.html$/, loader: "html-loader" }
    ];

module.exports = {

    options: {
        resolve: {
            modules: [
                'src',
                'node_modules',
                'test'
            ]
        }
    },

    src: {
        context: "./src",
        entry: "./main.js",

        module: {
            loaders: moduleLoaders
        },

        /**
         * set up the output to assign the module.exports object from
         * assets/js/src/main.js to the global namespace against the
         * value familyTree.
         */
        output: {
            libraryTarget: 'var',
            library: 'familyTree',
            path: "./public",
            filename: "bundle.js"
        }
    },

    /**
     * For testing require in all the tests in the main.js file and
     * have webpack create a single file that the test page can link to.
     */
    test: {
        context: "./test",
        entry: "./main.js",
        module: {
            rules: moduleLoaders
        },

        output: {
            path: "./test",
            filename: "bundle.js"
        }
    }
};
