module.exports = {
    all: [
        './src/**/*.js',
        './test/**/*.js',
        './Gruntfile.js',
        './grunt/**/*.js',
        '!./src/_lib/**/*',
        '!./test/_lib/**/*',
        '!./test/bundle.js'
    ],
    options: {
        bitwise: true,
        camelcase: true,
        curly: true,
        eqeqeq: true,
        es3: true,
        forin: true,
        freeze: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        noempty: true,
        nonbsp: true,
        nonew: true,
        plusplus: true,
        // quotmark: true,
        undef: true,
        unused: true,
        // strict: true,
        maxparams: 4,
        maxdepth: 3,
        maxstatements: 10,
        maxcomplexity: 3,
        maxlen: 200,
        white: true,
        devel: false,
        browser: true,
        indent: 4,
        predef: [
            'require',
            'module',
            'describe',
            'it',
            'expect',
            'beforeEach',
            'afterEach',
            'console'
        ]
    }
};
