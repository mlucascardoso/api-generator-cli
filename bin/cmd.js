#!/usr/bin/env node
'use strict';

const yargs = require('yargs');
const { join, resolve } = require('path');
const { homepage, version } = require(join(__dirname, '../package.json'));
const { commands } = require('../lib/core/yargs');

// Switch CWD if specified from options
const cwd = resolve(yargs.argv.cwd || process.cwd());
process.chdir(cwd);

// Init CLI commands and options
commands()
  .forEach(cmd =>
    yargs.command(cmd.command, cmd.desc, cmd.builder, cmd.handler),
  );

yargs
  .help()
  .demand(1)
  .epilog(
      (homepage ? `| Documentation: ${homepage}\n` : '') +
      (version ? `| Version: ${version}` : ''))
  .wrap(yargs.terminalWidth())
  .strict()
  .argv;
