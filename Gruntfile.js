module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		less:{
			development: {
			    files: {
			      'angularCalc/css/styles.css':'angularCalc/less/styles.less'
			    }
			}
		},
		connect: {
		    server: {
		      options: {
				livereload: true,
      			base: 'angularCalc/',
		        port: 8000
		      }
		    }
		},
		watch:{
			css:{
				files:'angularCalc/less/styles.less',
				tasks:['less'],
				options:{
					livereload: true
				}
			},
			scripts:{
				files:'angularCalc/js/*.js',
				options:{
					livereload: true,
					event: 'all'
				}
			},
			livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'angularCalc/*'
                ]
            }
		}
	})

	grunt.registerTask('default', [
		'less',
		'connect:server',
		'watch']);
	grunt.registerTask('w', ['watch']);
	grunt.registerTask('s', ['less']);
};
