/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  RegExp.quote = function (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  };

  var fs = require('fs');
  var path = require('path');
<<<<<<< HEAD
  var generateGlyphiconsData = require('./grunt/bs-glyphicons-data-generator.js');
  var BsLessdocParser = require('./grunt/bs-lessdoc-parser.js');
  var generateRawFilesJs = require('./grunt/bs-raw-files-generator.js');
  var updateShrinkwrap = require('./grunt/shrinkwrap.js');
=======
  var npmShrinkwrap = require('npm-shrinkwrap');
  var generateGlyphiconsData = require('./grunt/bs-glyphicons-data-generator.js');
  var BsLessdocParser = require('./grunt/bs-lessdoc-parser.js');
  var generateRawFiles = require('./grunt/bs-raw-files-generator.js');
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
            ' * Bootstrap v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
<<<<<<< HEAD
=======
    // NOTE: This jqueryCheck code is duplicated in customizer.js; if making changes here, be sure to update the other copy too.
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    jqueryCheck: 'if (typeof jQuery === \'undefined\') { throw new Error(\'Bootstrap\\\'s JavaScript requires jQuery\') }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist', 'docs/dist']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      grunt: {
        options: {
          jshintrc: 'grunt/.jshintrc'
        },
        src: ['Gruntfile.js', 'grunt/*.js']
      },
      src: {
        src: 'js/*.js'
      },
      test: {
<<<<<<< HEAD
        src: 'js/tests/unit/*.js'
      },
      assets: {
        src: ['docs/assets/js/application.js', 'docs/assets/js/customizer.js']
=======
        options: {
          jshintrc: 'js/tests/unit/.jshintrc'
        },
        src: 'js/tests/unit/*.js'
      },
      assets: {
        src: ['docs/assets/js/_src/*.js', 'docs/assets/js/*.js', '!docs/assets/js/*.min.js']
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      }
    },

    jscs: {
      options: {
<<<<<<< HEAD
        config: 'js/.jscs.json',
      },
      grunt: {
        src: ['Gruntfile.js', 'grunt/*.js']
      },
      src: {
        src: 'js/*.js'
      },
      test: {
        src: 'js/tests/unit/*.js'
      },
      assets: {
        src: ['docs/assets/js/application.js', 'docs/assets/js/customizer.js']
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'dist/css/bootstrap.css',
        'dist/css/bootstrap-theme.css',
        'docs/assets/css/docs.css',
        'docs/examples/**/*.css'
      ]
    },

=======
        config: 'js/.jscsrc'
      },
      grunt: {
        src: '<%= jshint.grunt.src %>'
      },
      src: {
        src: '<%= jshint.src.src %>'
      },
      test: {
        src: '<%= jshint.test.src %>'
      },
      assets: {
        options: {
          requireCamelCaseOrUpperCaseIdentifiers: null
        },
        src: '<%= jshint.assets.src %>'
      }
    },

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    concat: {
      options: {
        banner: '<%= banner %>\n<%= jqueryCheck %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
          'js/transition.js',
          'js/alert.js',
          'js/button.js',
          'js/carousel.js',
          'js/collapse.js',
          'js/dropdown.js',
          'js/modal.js',
          'js/tooltip.js',
          'js/popover.js',
          'js/scrollspy.js',
          'js/tab.js',
          'js/affix.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
<<<<<<< HEAD
        report: 'min'
      },
      bootstrap: {
        options: {
          banner: '<%= banner %>'
        },
=======
        preserveComments: 'some'
      },
      bootstrap: {
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        src: '<%= concat.bootstrap.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      },
      customize: {
<<<<<<< HEAD
        options: {
          preserveComments: 'some'
        },
        src: [
          'docs/assets/js/vendor/less.min.js',
          'docs/assets/js/vendor/jszip.min.js',
          'docs/assets/js/vendor/uglify.min.js',
          'docs/assets/js/vendor/blob.js',
          'docs/assets/js/vendor/filesaver.js',
          'docs/assets/js/raw-files.min.js',
          'docs/assets/js/customizer.js'
=======
        src: [
          'docs/assets/js/_vendor/less.min.js',
          'docs/assets/js/_vendor/jszip.min.js',
          'docs/assets/js/_vendor/uglify.min.js',
          'docs/assets/js/_vendor/blob.js',
          'docs/assets/js/_vendor/filesaver.js',
          'docs/assets/js/raw-files.min.js',
          'docs/assets/js/_src/customizer.js'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        ],
        dest: 'docs/assets/js/customize.min.js'
      },
      docsJs: {
<<<<<<< HEAD
        options: {
          preserveComments: 'some'
        },
        src: [
          'docs/assets/js/vendor/holder.js',
          'docs/assets/js/application.js'
=======
        src: [
          'docs/assets/js/_vendor/holder.js',
          'docs/assets/js/_vendor/ZeroClipboard.min.js',
          'docs/assets/js/_src/application.js'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        ],
        dest: 'docs/assets/js/docs.min.js'
      }
    },

<<<<<<< HEAD
=======
    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'js/tests/index.html'
    },

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    less: {
      compileCore: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>.css': 'less/bootstrap.less'
        }
      },
      compileTheme: {
        options: {
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: '<%= pkg.name %>-theme.css.map',
          sourceMapFilename: 'dist/css/<%= pkg.name %>-theme.css.map'
        },
        files: {
          'dist/css/<%= pkg.name %>-theme.css': 'less/theme.less'
        }
<<<<<<< HEAD
      },
      minify: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css',
          'dist/css/<%= pkg.name %>-theme.min.css': 'dist/css/<%= pkg.name %>-theme.css'
        }
      }
    },

    cssmin: {
      compress: {
        options: {
          keepSpecialComments: '*',
          noAdvanced: true, // turn advanced optimizations off until the issue is fixed in clean-css
          report: 'min',
          selectorsMergeMode: 'ie8'
        },
        src: [
          'docs/assets/css/docs.css',
          'docs/assets/css/pygments-manni.css'
=======
      }
    },

    autoprefixer: {
      options: {
        browsers: [
          'Android 2.3',
          'Android >= 4',
          'Chrome >= 20',
          'Firefox >= 24', // Firefox 24 is the latest ESR
          'Explorer >= 8',
          'iOS >= 6',
          'Opera >= 12',
          'Safari >= 6'
        ]
      },
      core: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>.css'
      },
      theme: {
        options: {
          map: true
        },
        src: 'dist/css/<%= pkg.name %>-theme.css'
      },
      docs: {
        src: 'docs/assets/css/_src/docs.css'
      },
      examples: {
        expand: true,
        cwd: 'docs/examples/',
        src: ['**/*.css'],
        dest: 'docs/examples/'
      }
    },

    csslint: {
      options: {
        csslintrc: 'less/.csslintrc'
      },
      src: [
        'dist/css/bootstrap.css',
        'dist/css/bootstrap-theme.css'
      ],
      examples: [
        'docs/examples/**/*.css'
      ],
      docs: {
        options: {
          ids: false,
          'overqualified-elements': false
        },
        src: 'docs/assets/css/_src/docs.css'
      }
    },

    cssmin: {
      options: {
        compatibility: 'ie8',
        keepSpecialComments: '*',
        noAdvanced: true
      },
      core: {
        files: {
          'dist/css/<%= pkg.name %>.min.css': 'dist/css/<%= pkg.name %>.css',
          'dist/css/<%= pkg.name %>-theme.min.css': 'dist/css/<%= pkg.name %>-theme.css'
        }
      },
      docs: {
        src: [
          'docs/assets/css/_src/docs.css',
          'docs/assets/css/_src/pygments-manni.css'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        ],
        dest: 'docs/assets/css/docs.min.css'
      }
    },

    usebanner: {
<<<<<<< HEAD
      dist: {
        options: {
          position: 'top',
          banner: '<%= banner %>'
        },
        files: {
          src: [
            'dist/css/<%= pkg.name %>.css',
            'dist/css/<%= pkg.name %>.min.css',
            'dist/css/<%= pkg.name %>-theme.css',
            'dist/css/<%= pkg.name %>-theme.min.css'
          ]
        }
=======
      options: {
        position: 'top',
        banner: '<%= banner %>'
      },
      files: {
        src: 'dist/css/*.css'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      }
    },

    csscomb: {
      options: {
        config: 'less/.csscomb.json'
      },
      dist: {
<<<<<<< HEAD
        files: {
          'dist/css/<%= pkg.name %>.css': 'dist/css/<%= pkg.name %>.css',
          'dist/css/<%= pkg.name %>-theme.css': 'dist/css/<%= pkg.name %>-theme.css'
        }
=======
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      },
      examples: {
        expand: true,
        cwd: 'docs/examples/',
<<<<<<< HEAD
        src: ['**/*.css'],
        dest: 'docs/examples/'
=======
        src: '**/*.css',
        dest: 'docs/examples/'
      },
      docs: {
        files: {
          'docs/assets/css/_src/docs.css': 'docs/assets/css/_src/docs.css'
        }
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: 'fonts/*',
        dest: 'dist/'
      },
      docs: {
        expand: true,
        cwd: './dist',
        src: [
          '{css,js}/*.min.*',
          'css/*.map',
          'fonts/*'
        ],
        dest: 'docs/dist'
      }
    },

<<<<<<< HEAD
    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: 'js/tests/index.html'
    },

=======
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    connect: {
      server: {
        options: {
          port: 3000,
          base: '.'
        }
      }
    },

    jekyll: {
      docs: {}
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: function () {
            var filePath = path.join(__dirname, 'less/variables.less');
<<<<<<< HEAD
            var fileContent = fs.readFileSync(filePath, {encoding: 'utf8'});
            var parser = new BsLessdocParser(fileContent);
            return {sections: parser.parseFile()};
          }
        },
        files: {
          'docs/_includes/customizer-variables.html': 'docs/jade/customizer-variables.jade',
          'docs/_includes/nav-customize.html': 'docs/jade/customizer-nav.jade'
=======
            var fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
            var parser = new BsLessdocParser(fileContent);
            return { sections: parser.parseFile() };
          }
        },
        files: {
          'docs/_includes/customizer-variables.html': 'docs/_jade/customizer-variables.jade',
          'docs/_includes/nav/customize.html': 'docs/_jade/customizer-nav.jade'
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        }
      }
    },

    validation: {
      options: {
        charset: 'utf-8',
        doctype: 'HTML5',
        failHard: true,
        reset: true,
        relaxerror: [
          'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
          'Element img is missing required attribute src.'
        ]
      },
      files: {
        src: '_gh_pages/**/*.html'
      }
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      less: {
        files: 'less/*.less',
        tasks: 'less'
      }
    },

    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver');
          return old ? RegExp.quote(old) : old;
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    },

    'saucelabs-qunit': {
      all: {
        options: {
          build: process.env.TRAVIS_JOB_ID,
          concurrency: 10,
<<<<<<< HEAD
          urls: ['http://127.0.0.1:3000/js/tests/index.html'],
          browsers: grunt.file.readYAML('test-infra/sauce_browsers.yml')
=======
          maxRetries: 3,
          urls: ['http://127.0.0.1:3000/js/tests/index.html'],
          browsers: grunt.file.readYAML('grunt/sauce_browsers.yml')
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        }
      }
    },

    exec: {
      npmUpdate: {
        command: 'npm update'
<<<<<<< HEAD
      },
      npmShrinkWrap: {
        command: 'npm shrinkwrap --dev'
=======
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      }
    }
  });


  // These plugins provide necessary tasks.
<<<<<<< HEAD
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});
=======
  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

<<<<<<< HEAD
  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (!process.env.TWBS_TEST || process.env.TWBS_TEST === 'core') {
    testSubtasks = testSubtasks.concat(['dist-css', 'csslint', 'jshint', 'jscs', 'qunit', 'build-customizer-html']);
  }
  // Skip HTML validation if running a different subset of the test suite
  if (!process.env.TWBS_TEST || process.env.TWBS_TEST === 'validate-html') {
=======
  var runSubset = function (subset) {
    return !process.env.TWBS_TEST || process.env.TWBS_TEST === subset;
  };
  var isUndefOrNonZero = function (val) {
    return val === undefined || val !== '0';
  };

  // Test task.
  var testSubtasks = [];
  // Skip core tests if running a different subset of the test suite
  if (runSubset('core')) {
    testSubtasks = testSubtasks.concat(['dist-css', 'csslint', 'jshint', 'jscs', 'qunit', 'build-customizer-html']);
  }
  // Skip HTML validation if running a different subset of the test suite
  if (runSubset('validate-html') &&
      // Skip HTML5 validator on Travis when [skip validator] is in the commit message
      isUndefOrNonZero(process.env.TWBS_DO_VALIDATOR)) {
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    testSubtasks.push('validate-html');
  }
  // Only run Sauce Labs tests if there's a Sauce access key
  if (typeof process.env.SAUCE_ACCESS_KEY !== 'undefined' &&
      // Skip Sauce if running a different subset of the test suite
<<<<<<< HEAD
      (!process.env.TWBS_TEST || process.env.TWBS_TEST === 'sauce-js-unit')) {
=======
      runSubset('sauce-js-unit') &&
      // Skip Sauce on Travis when [skip sauce] is in the commit message
      isUndefOrNonZero(process.env.TWBS_DO_SAUCE)) {
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    testSubtasks.push('connect');
    testSubtasks.push('saucelabs-qunit');
  }
  grunt.registerTask('test', testSubtasks);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
<<<<<<< HEAD
  grunt.registerTask('dist-css', ['less', 'cssmin', 'csscomb', 'usebanner']);
=======
  grunt.registerTask('less-compile', ['less:compileCore', 'less:compileTheme']);
  grunt.registerTask('dist-css', ['less-compile', 'autoprefixer', 'usebanner', 'csscomb', 'cssmin']);
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // Docs distribution task.
  grunt.registerTask('dist-docs', 'copy:docs');

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-css', 'copy:fonts', 'dist-js', 'dist-docs']);

  // Default task.
<<<<<<< HEAD
  grunt.registerTask('default', ['test', 'dist', 'build-glyphicons-data', 'build-customizer', 'update-shrinkwrap']);
=======
  grunt.registerTask('default', ['test', 'dist', 'build-glyphicons-data', 'build-customizer']);
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', 'sed');

<<<<<<< HEAD
  grunt.registerTask('build-glyphicons-data', generateGlyphiconsData);
=======
  grunt.registerTask('build-glyphicons-data', function () { generateGlyphiconsData.call(this, grunt); });
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // task for building customizer
  grunt.registerTask('build-customizer', ['build-customizer-html', 'build-raw-files']);
  grunt.registerTask('build-customizer-html', 'jade');
  grunt.registerTask('build-raw-files', 'Add scripts/less files to customizer.', function () {
    var banner = grunt.template.process('<%= banner %>');
<<<<<<< HEAD
    generateRawFilesJs(banner);
  });

  // Task for updating the npm packages used by the Travis build.
  grunt.registerTask('update-shrinkwrap', ['exec:npmUpdate', 'exec:npmShrinkWrap', '_update-shrinkwrap']);
  grunt.registerTask('_update-shrinkwrap', function () { updateShrinkwrap.call(this, grunt); });
=======
    generateRawFiles(grunt, banner);
  });

  // Task for updating the cached npm packages used by the Travis build (which are controlled by test-infra/npm-shrinkwrap.json).
  // This task should be run and the updated file should be committed whenever Bootstrap's dependencies change.
  grunt.registerTask('update-shrinkwrap', ['exec:npmUpdate', '_update-shrinkwrap']);
  grunt.registerTask('_update-shrinkwrap', function () {
    var done = this.async();
    npmShrinkwrap({ dev: true, dirname: __dirname }, function (err) {
      if (err) {
        grunt.fail.warn(err)
      }
      var dest = 'test-infra/npm-shrinkwrap.json';
      fs.renameSync('npm-shrinkwrap.json', dest);
      grunt.log.writeln('File ' + dest.cyan + ' updated.');
      done();
    });
  });
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
};
