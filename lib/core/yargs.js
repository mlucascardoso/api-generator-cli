'use strict'

const { join, resolve } = require('path');
const requireDir = require('require-dir');
const shell = require('shelljs');

const commands = () => {
  // External dependencies to pass to the commands
  const dependencies = { join, resolve, console, shell, process }

  // Load commands from folder
  const commandsFn = requireDir(join(__dirname, '../commands'))
  const commands = Object.keys(commandsFn).map((i) => commandsFn[i](dependencies))

  return commands;
}

const baseOptions = (yargs) => {
  return yargs
    .help(false)
    .version(false)
    .option('env', {
      describe: 'The environment to run the command in',
      type: 'string',
    })
    .option('test', {
      describe: 'test',
      type: 'string',
    })
}


module.exports = {
  baseOptions,
  commands,
}