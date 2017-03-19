module.exports = {

    main: {
        src: [
            "src/**/*.js",
            "!src/_lib/**/*.js",
            "test/**/*.js",
            "!test/bundle.js",
            "!test/_lib/**/*.js"
        ],
        options: require('./jscs-options')
    }
};
