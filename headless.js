// This is totally inspired by https://github.com/Medium/phantomjs
var fs = require('fs')
var path = require('path')
var spawn = require('child_process').spawn
var binary_path = path.join(__dirname, 'dist/chrome-headless', 'headless_shell')
var ld_library_path = path.join(__dirname, 'dist/chrome-headless/lib')
exports.exec = function () {
  var args = Array.prototype.slice.call(arguments)
  args.unshift("--no-sandbox", "--disable-gpu")
  // Overload LD_LIBRARY_PATH to include NSS and NSPR dynamic library
  var env = Object.create( process.env );
  env.LD_LIBRARY_PATH = ld_library_path;
  return spawn(binary_path, args, { env: env } )
}
