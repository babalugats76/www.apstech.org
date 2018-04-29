module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cacheBust: {
            assets: {
                options: {
                    assets: ['dist/www-apstech-org.min.js', 'css/app.css'],
                    queryString: true
                },
                src: ['index.html']
            }
        },
        concat: {
            options: {
                separator: ';\n',
            },
            dist: {
                src: ['src/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/javascripts/',
                        src: ['**/*.js'],
                        dest: 'js/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**/*.js', '**/*.map'],
                        dest: 'js/jquery/'
                    },
                    {
                        expand: true,
                        filter: 'isFile',
                        flatten: true,
                        cwd: 'bower_components/',
                        src: ['bootstrap-sass/assets/fonts/**'],
                        dest: 'fonts/bootstrap/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap-sass/assets/stylesheets/',
                        src: ['**/*.scss'],
                        dest: 'scss/bootstrap/'
                    },
                    {
                        expand: true,
                        cwd: 'node_modules/angular/',
                        src: ['**/*.js', '**/*.map'],
                        dest: 'js/angular/'
                    }
                ]
            },
        },
        sass: {
            options: {
                includePaths: ['scss/*.scss']
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'css/app.css': 'scss/app.scss'
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            html: {
                files: ['index.html']
            },
            js: {
                files: ['src/showcase.js']
            },
            sass: {
                files: ['scss/**/*.scss', 'scss/_customize.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-cache-bust');
    grunt.registerTask('style', ['sass'])
    grunt.registerTask('build', ['sass', 'copy', 'concat', 'uglify', 'cacheBust:assets']);
    grunt.registerTask('default', ['build', 'watch']);
}
