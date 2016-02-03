const path = require('path');
const npm = require('rollup-plugin-npm');
const babel = require('rollup-plugin-babel');

module.exports =  function(grunt) {

    grunt.initConfig({
        rollup: {
            options: {
                format: 'iife',
                sourceMap: true,
                plugins: [
                    npm({ jsnext: true, main: true }),
                    babel({ exclude: 'node_modules/**'})
                ]
            },
            files: {
                'dest': 'build/app.js',
                'src': 'src/js/index.js'
            }
        },
        jade: {
            html: {
                files: {
                    './': ['src/jade/**/*.jade']
                },
                options: {
                    client: false
                }
            }
        },
        sass: {
            options: {
                sourcemap: true
            },
            compile: {
                files: {
                    'build/index.css': 'src/sass/index.sass'
                }
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.sass'],
                tasks: ['sass']
            },
            jade: {
                files: ['src/jade/**/*.jade'],
                tasks: ['jade']
            },
            js: {
                files: ['src/js/**/*.js'],
                tasks: ['rollup']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jade');
    grunt.loadNpmTasks('grunt-rollup');

    grunt.registerTask('build', ['jade', 'rollup', 'sass']);
}
