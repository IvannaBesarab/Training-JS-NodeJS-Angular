module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-serve');

	grunt.initConfig({
		less:{
			files:{
					'calculator/css/styles.css':'less/styles.less'
				}
		},
		serve: {
			options: {
				port: 9000
			},
			path:'calculator/'
		},
		watch:{
			css:{
				files:'calculator/less/*.less',
				tasks:['less'],
				options:{
					livereload: true
				}
			},
			scripts:{
				files:'calculator/js/*.js',
				options:{
					livereload: true,
					event: 'all'
				}
			}
		}
	})

	grunt.registerTask('default', ['less','serve']);
	grunt.registerTask('watch', ['watch']);
};