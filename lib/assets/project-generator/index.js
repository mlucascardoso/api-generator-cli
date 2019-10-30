const prompts = require('prompts');

const { apiQuestion, languageQuestion, projectPath } = require('./questions');
const { onCancel } = require('../../core/prompts');

module.exports = async () => {
  const resp = await prompts([
    apiQuestion(),
    languageQuestion(),
    projectPath(),
  ], { onCancel });

  return resp;
};
