module.exports = {
    dev: {
        options: {
            sourceMap: true,
            outputStyle: 'expanded'
        },
        files: {
            'public/main.css' : ['src/styles/*.scss']
        }
    },
    dist: {
        options: {
            outputStyle: 'compressed'
        },
        files: {
            'public/main.css' : ['src/styles/*.scss']
        }
    }
};
