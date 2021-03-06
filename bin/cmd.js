#!/usr/bin/env node
'use strict';

const yargs = require('yargs');
// const { resolve } = require('path');
const { commands } = require('../lib/core/yargs');

// Switch CWD if specified from options
// const cwd = resolve(yargs.argv.cwd || process.cwd());
// process.chdir(cwd);

// Init CLI commands and options
commands()
  .forEach(cmd =>
    yargs.command(cmd.command, cmd.desc, cmd.builder, cmd.handler),
  );

const cli = yargs
  .help()
  .version()
  .wrap(yargs.terminalWidth())
  .strict();

const args = cli.argv;

// if no command then show help
if (!args._[0]) {
  cli.showHelp();
}
