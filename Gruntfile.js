module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		pandoc: {
			toHtml: {
				configs: {
					'publish' : 'HTML',
					'pandoc_options' : '-s --toc --toc-depth=5 --template=assets/template.html -f markdown+mmd_title_block+autolink_bare_uris+definition_lists'
				},
				files: {
					'from' : ['how_to_make_a_quality_website.md']
				}
			}
		},

		rename: {
			main: {
				files: [{
					src: ['how_to_make_a_quality_website.html'],
					dest: 'index.html'
				}]
			}
		}
	});

	grunt.registerTask('default', ['pandoc', 'rename']);

	grunt.loadNpmTasks('grunt-pandoc');
	grunt.loadNpmTasks('grunt-contrib-rename');
};
