var util = require('util');
var request = require('request');
var targz = require('tar.gz');

var get_binary_url = function () {
  var version = require('./package.json').version.split(/[.-]/, 5).splice(0, 4).join('.');
  return util.format('https://github.com/yukinying/chrome-headless-travis-build/releases/download/%s/chrome-headless_linux_x64.tgz', version);
}
var binary_url = get_binary_url();
var read = request.get(binary_url);
var write = targz().createWriteStream('dist');
read.pipe(write);
