/* jshint node:true */
var loadNpmTasks,
    registerTasks;


module.exports = function (grunt) {

    grunt.initConfig({

        branch: 'master',
        pkg: grunt.file.readJSON('package.json'),
        sass: require('./grunt/sass'),
        watch: require('./grunt/watch'),
        webpack: require('./grunt/webpack'),
        jasmine: require('./grunt/jasmine'),
        jshint: require('./grunt/jshint'),
        jscs: require('./grunt/jscs'),
        uglify: require('./grunt/uglify'),
        copy: require('./grunt/copy'),
        clean: require('./grunt/clean')
    });

    loadNpmTasks(grunt);
    registerTasks(grunt);
};


registerTasks = function (grunt) {

    /**
     * Prepares the JS for the development environment
     *
     * Does the common JS processing
     * - Lint
     * - Compile into a single bundle
     * - Run unit tests
     */
    grunt.registerTask('process_js', [
        'jshint',
        'jscs',
        'webpack',
        'jasmine'
    ]);

    /**
     * Prepares the JS for distribution
     * Does the common tasks, but then minimises the JS using uglify
     */
    grunt.registerTask('process_js_dist', [
        'process_js',
        'uglify'
    ]);

    grunt.registerTask('build', "Create development build", [
        'sass:dev',
        'copy',
        'process_js'
    ]);

    /**
     * The default task that will be run.
     *
     * This assumes that we are building for a development environment and
     * not for distribution.
     *
     * Will set up a watch on the file system to rebuild for each change.
     */
    grunt.registerTask('default', [
        'clean',
        'build',
        'watch'
    ]);

    /**
     * The dist task. From the command line -> grunt dist
     *
     * Prepares the assets for distribution to production environment
     *
     * CSS and JS is minimised. No watch.
     */
    grunt.registerTask('dist', [
        'clean',
        'sass:dist',
        'copy',
        'process_js_dist'
    ]);
};


loadNpmTasks = function (grunt) {
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jscs');
};
