/*!
 * Bootstrap Grunt task for Glyphicons data generation
 * http://getbootstrap.com
 * Copyright 2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
'use strict';
var fs = require('fs');

<<<<<<< HEAD
module.exports = function generateGlyphiconsData() {
  // Pass encoding, utf8, so `readFileSync` will return a string instead of a
  // buffer
  var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
  var glpyhiconsLines = glyphiconsFile.split('\n');
=======
module.exports = function generateGlyphiconsData(grunt) {
  // Pass encoding, utf8, so `readFileSync` will return a string instead of a
  // buffer
  var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
  var glyphiconsLines = glyphiconsFile.split('\n');
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // Use any line that starts with ".glyphicon-" and capture the class name
  var iconClassName = /^\.(glyphicon-[^\s]+)/;
  var glyphiconsData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
                       '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
<<<<<<< HEAD
  for (var i = 0, len = glpyhiconsLines.length; i < len; i++) {
    var match = glpyhiconsLines[i].match(iconClassName);
=======
  var glyphiconsYml = 'docs/_data/glyphicons.yml';
  for (var i = 0, len = glyphiconsLines.length; i < len; i++) {
    var match = glyphiconsLines[i].match(iconClassName);
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

    if (match !== null) {
      glyphiconsData += '- ' + match[1] + '\n';
    }
  }

  // Create the `_data` directory if it doesn't already exist
  if (!fs.existsSync('docs/_data')) {
    fs.mkdirSync('docs/_data');
  }

<<<<<<< HEAD
  fs.writeFileSync('docs/_data/glyphicons.yml', glyphiconsData);
=======
  try {
    fs.writeFileSync(glyphiconsYml, glyphiconsData);
  }
  catch (err) {
    grunt.fail.warn(err);
  }
  grunt.log.writeln('File ' + glyphiconsYml.cyan + ' created.');
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
};
