const moment = require('moment');
const response = require('../assets/project-generator');
const { mkdir } = require('shelljs');
const { existsSync } = require('fs');

module.exports = (dependencies) => {
  const cmd = {};

  cmd.command = ['project:generate', 'project:create'];
  cmd.desc = 'Creates a new project';
  cmd.builder = {};
  cmd.handler = async (argv) => {
    const { apiType, languageType, projectPath } = await response();

    console.log(apiType, languageType);
    if (projectPath) {
      const path = existsSync(projectPath) ?
        projectPath + '-' + moment().unix() :
        projectPath;

      mkdir(path);
      mkdir(`${path}/src`);

      const folders = ['controllers', 'models', 'views', 'routes'];
      folders.forEach(folder => {
        mkdir(`${path}/src/${folder}`);
      });
    }
  };

  return cmd;
};
