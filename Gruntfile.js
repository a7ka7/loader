module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "dist/styles.css": "less/main.less"
        }
      }
    },
    autoprefixer: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        // Target-specific file lists and/or options go here.
        src: 'dist/styles.css',
        dest: 'dist/styles.css'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'js/app.js']
    },
    //concat: {
    //  dist: {
    //    src: ['js/app.js'],
    //    dest: 'js/app.min.js'
    //  }
    //},
    uglify: {
        my_target: {
          files: {
            'js/_app.js': ['js/app.js']
          }
        }
    },
    watch: {
      styles: {
        files: ['less/*.less','*.html','<%= jshint.files %>'], // which files to watch
        tasks: ['less', 'jshint', 'uglify', 'autoprefixer'],
        options: {
          //spawn: false,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch', 'jshint', 'uglify']);
};
