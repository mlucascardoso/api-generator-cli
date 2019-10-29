'use strict'

const { baseOptions } = require('../core/yargs')

module.exports = function (dependencies) {
  let cmd = {}

  cmd.command = ['project:generate', 'project:create'];
  cmd.desc = 'Scaffolding command to create a new module';
  cmd.builder = yargs => {
    baseOptions(yargs)
      .option('abc', {
        describe: 'A test param',
        type: 'string',
      })
      .demandOption(['env'])
      .argv;
  }

  cmd.handler = (argv) => {
    console.log(argv);

  }

  return cmd;
}
