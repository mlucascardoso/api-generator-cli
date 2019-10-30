const prompts = require('prompts');

const { apiQuestion, languageQuestion, projectPath } = require('./questions');

module.exports = async () => {
  const resp = await prompts([
    apiQuestion(),
    languageQuestion(),
    projectPath(),
  ]);

  return resp;
};
