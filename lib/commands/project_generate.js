const response = require('../assets/project-generator');
module.exports = (dependencies) => {
  const cmd = {};

  cmd.command = ['project:generate', 'project:create'];
  cmd.desc = 'Scaffolding command to create a new module';
  cmd.builder = {};
  cmd.handler = async (argv) => {
    const a = await response();

    console.log(a);
  };

  return cmd;
};
