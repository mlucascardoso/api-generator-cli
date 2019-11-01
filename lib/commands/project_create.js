const dependeciesInstaller = require('../assets/project-generator/dependecies_installer');
const moment = require('moment');
const projectCreator = require('../assets/project-generator');
const questions = require('../assets/project-generator/questions');

const { existsSync } = require('fs');
const { mkdir } = require('shelljs');

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
  const { apiType, languageType, projectPath } = await questions();

  if (projectPath) {
    const path = existsSync(projectPath) ?
      projectPath + '-' + moment().unix() :
      projectPath;

    mkdir(path);
    projectCreator(apiType, languageType, path);
    dependeciesInstaller(path);
  }
};

const cmd = {
  command: ['project:create', 'project:generate', 'pc'],
  desc: 'Creates a new project',
  builder,
  handler,
};

module.exports = cmd;
