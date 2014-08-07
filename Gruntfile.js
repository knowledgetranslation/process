module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		pandoc: {
			toHtml: {
				configs: {
					'publish' : 'HTML',
					'pandoc_options' : '-s --toc --toc-depth=5 --template=assets/template.html -f markdown+mmd_title_block'
				},
				files: {
					'from' : ['how_to_make_a_quality_website.md']
				}
			}
		}
	});

	grunt.registerTask('default', ['pandoc']);

	grunt.loadNpmTasks('grunt-pandoc');
};
