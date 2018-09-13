module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['css']
        },
        files: {
          'css/index.css': 'css/index.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css'],
          cleancss: true,
          modifyVars: {
            imgPath: 'http://mycdn.com/path/to/images',
            bgColor: 'red'
          }
        },
        files: {
          'path/to/result.css': 'path/to/source.less'
        }
      }
    },
    'http-server': {
      'dev': {
        root: '',
        port: 8282,
        host: '127.0.0.1',
        cache: 'cache',
        showDir: true,
        autoIndex: true,
        defaultExt: 'html',
        runInBackground: false
      }
    },
    concat: {
      dist: {
        src: ['js/jquery-1.10.2.min.js', 'js/hammer.min.js', 'bootstrap.min.js', 'js/setup.js', 'js/resize-text.js', 'js/bar-chart.js', 'js/donut-chart.js', 'js/progress-chart.js', 'js/jquery.color.min.js', 'js/portfolio.js', 'js/ticker.js', 'js/contact.js'],
        dest: 'js/min.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'js/min.js': ['js/min.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('less', ['less:development']);
  grunt.registerTask('js', ['concat:dist', 'uglify:dist']);

  grunt.registerTask('server', ['http-server']);
};
