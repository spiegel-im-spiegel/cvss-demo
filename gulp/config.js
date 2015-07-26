// @file config.js
var dest = './build'; // output folder
var src = './src';  //src folder

module.exports = {
  // output
  dest: dest,

  // build for JavaScript (js)
  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  // Webpack
  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'cvss3c.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },

  // copy
  copy: {
    src: [
      src + '/www/cvss3.html',
      src + '/www/cvss3j.html'
    ],
    dest: dest
  }
}
