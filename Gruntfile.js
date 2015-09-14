module.exports = function(grunt) {
  'use strict';
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        // experimental: true,
        modules: 'amd'
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'src/app',
          src: [
            '*.js', '**/*.js', '**/**/*.js'
          ],
          dest: 'dist/app'
        }]
      }
    },

    copy: {
      dev: {
        cwd: 'src/',
        src: [
          'app/views/**/components/*.html',
        ],
        dest: 'dist/',
        expand: true
      }
    },

    watch: {
      js: {
        files: [
          'src/app/*.js', 'src/app/**/*.js',
          'src/app/**/**/*.js'
        ],
        tasks: ['babel'],
        options: {
          livereload: true,
        }
      },
      html: {
        files: [
          'src/app/views/**/components/*.html',
        ],
        tasks: ['copy'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.registerTask('default', ['babel:dev', 'copy:dev']);
  grunt.registerTask('dev', ['watch']);
};


