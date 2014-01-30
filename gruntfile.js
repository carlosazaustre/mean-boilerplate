'use strict';

module.exports = function(grunt) {

	// Load all grunt tasks
	require('load-grunt-tasks')(grunt, {
		pattern: 'grunt-*'
	});
	// Show elapsed time at the end
	require('time-grunt')(grunt);

	grunt.initConfig({

		// Project configuration
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'app/stylus/**/*.styl',
				tasks: ['stylus'],
			},
			html: {
				files: 'app/views/**/*.html',
			}
		},

		stylus: {
			options: {
				use: [
					require('nib')
				]
			},
			compile: {
				options: {
					paths: ['app/stylus/**/*.styl'],
					'include css': true
				},
				files: {
					'public/css/style.css': 'app/stylus/main.styl'
				}
			}
		},

		jshint: {
			all: {
				src: ['gruntfile.js','server.js','config/**/*.js', 'app/**/*.js','public/js/**/*.js','test/**/*.js'],
				options: {
					jshintrc: true
				}
			}
		},

		bower: {
			install: {
				options: {
					targetDir: 'public/vendor',
					layout: 'byComponent',
					install: true,
					verbose: true,
					cleanBowerDir: true
				}
			}
		},

		nodemon: {
			dev: {
				script: 'server.js'
			}
		},

		concurrent: {
			tasks: ['nodemon', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		}

	});

	// Bower Task and Stylus proccesor
	grunt.registerTask('install', ['bower', 'stylus']);

	// Test Task
	grunt.registerTask('test', ['jshint']);

	// Start server and concurrent
	grunt.registerTask('default', ['jshint', 'concurrent']);

};