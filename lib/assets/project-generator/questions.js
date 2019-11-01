const prompts = require('prompts');
const { pwd } = require('shelljs');
const { onCancel } = require('../../core/prompts');

const apiQuestion = () => {
  return {
    type: 'select',
    name: 'apiType',
    message: 'Which API template you want to use?',
    choices: [
      { title: 'Rest', value: 'rest' },
      { title: 'Graphql', value: 'graphql' },
    ],
  };
};

const languageQuestion = () => {
  return {
    type: 'select',
    name: 'languageType',
    message: 'Which language this project uses?',
    choices: [
      { title: 'Javascript', value: 'javascript' },
      { title: 'Typescript', value: 'typescript' },
    ],
  };
};

const projectPath = () => {
  return {
    type: 'text',
    name: 'projectPath',
    message: 'What about the project path?',
    initial: `${pwd()}/../my-new-project`,
  };
};

module.exports = async () => {
  const resp = await prompts([
    apiQuestion(),
    languageQuestion(),
    projectPath(),
  ], { onCancel });

  return resp;
};
