#!/usr/bin/env node
'use strict';

const { getYArgs } = require('./core/yargs');

const yargs = getYArgs();

const { projectGenerate } = require('./commands/project_generate');

const cli = yargs
  .help()
  .version()
  .command(['project:generate', 'project:create'], 'Generate new project template', projectGenerate)
  .wrap(yargs.terminalWidth())
  .strict();

const args = cli.argv;

console.log(args);

if (!args._[0]) {
  cli.showHelp();
}

