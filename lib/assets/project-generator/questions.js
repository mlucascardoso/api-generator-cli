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
      { title: 'Javascript', value: 'js' },
      { title: 'Typescript', value: 'ts' },
    ],
  };
};

const projectPath = () => {
  return {
    type: 'text',
    name: 'projectPath',
    message: 'What about the project path?',
    initial: '/home/lucas/projects',
  };
};

module.exports = {
  apiQuestion,
  languageQuestion,
  projectPath,
};
