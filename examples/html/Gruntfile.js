module.exports = function (grunt) {
    grunt.initConfig({
        includeMethod: {
            client: {
                wrap: "'",
                basePath: './src',
                escapeWrap: true,
                name: '__injectTemplate',
                src: './src/code/*.js',
                dest: './dist',
                minify: true,
                minifyOptions: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeCommentsFromCDATA: true,
                    removeCDATASectionsFromCDATA: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true
                }
            }
        }
    });

    grunt.loadTasks('../../tasks');
    grunt.registerTask('default', ['includeMethod:client']);

};