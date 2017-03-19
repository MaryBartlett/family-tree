module.exports = {

    /**
     * If any of the scss file change then execute the sass task
     */
    style: {
        files: [
            'src/styles/*.scss'
        ],
        tasks: ['sass:dev']
    },

    /**
     * If any of the JS files change (excluding the bundles to avoid recursion) then
     * execute the linter, then bundle using webpack, then run the unit tests using mocha.
     */
    js: {
        files: [
            './app.js',
            './Gruntfile.js',
            'src/**/*.js',
            'src/**/*._.html',
            'test/**/*.js',
            'grunt/**/*.js',
            '!public/**/*',
            '!test/bundle.js'
        ],
        tasks: ['process_js']
    },

    html: {
        files: [
            './templates/*.html'
        ]
    }
};
