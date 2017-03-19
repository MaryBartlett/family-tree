module.exports = {
    main: {
        files: [
            {
                expand: true,
                flatten: true,
                src: ['src/*.html', 'src/*.css'],
                dest: 'public/'
            }
        ]
    }
};
