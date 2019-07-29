module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/main.css': 'scss/main.scss'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			options: {
				esversion: 6
			},
			files: ['js/main.js']
		},
		uglify: {
			my_target: {
				files: {
					'js/main.min.js': ['js/main.js']
				}
			}
		},
		watch: {
			sass: {
				files: ['scss/*.scss'],
				tasks: ['sass', 'cssmin']
			},
			jshint: {
				files: ['js/*.js', '!js/*.min.js'],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify-es');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);

}