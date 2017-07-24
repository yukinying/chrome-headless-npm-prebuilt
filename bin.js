#!/usr/bin/env node
var args = process.argv.slice(2)
var headless = require('chrome-headless-prebuilt-nightly')
var program = headless.exec.apply(this, args)
program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
  // do something on end
})
