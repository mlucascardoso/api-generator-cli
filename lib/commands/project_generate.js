const moment = require('moment');
const response = require('../assets/project-generator');
const mkdir = require('../helpers/dir_creator');
const { existsSync } = require('fs');

// const { baseOptions } = require('../core/yargs');

const builder = yargs => {
  // baseOptions(yargs)
  //   .help()
  //   .option('abc', {
  //     describe: 'Name of the migration to undo',
  //     type: 'string',
  //   })
  //   .argv;
};

const handler = async (argv) => {
  const { projectPath } = await response();

  if (projectPath) {
    const path = existsSync(projectPath) ?
      projectPath + '-' + moment().unix() :
      projectPath;

    const folders = [
      path,
      `${path}/src`,
      `${path}/src/controllers`,
      `${path}/src/models`,
      `${path}/src/views`,
      `${path}/src/routes`,
    ];

    mkdir(folders);
  }
};

const cmd = {
  command: ['project:generate', 'project:create'],
  desc: 'Creates a new project',
  builder,
  handler,
};

module.exports = cmd;
