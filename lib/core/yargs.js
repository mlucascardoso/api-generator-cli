'use strict';

const { join } = require('path');
const requireDir = require('require-dir');

const commands = () => {
  // Load commands from folder
  const commandsFn = requireDir(join(__dirname, '../commands'));
  const commands = Object.keys(commandsFn).map(key => commandsFn[key]);

  return commands;
};

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
    });
};


module.exports = {
  baseOptions,
  commands,
};
