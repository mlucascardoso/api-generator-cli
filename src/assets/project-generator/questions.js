const apiQuestion = () => {
  return {
    type: "select",
    name: "apiType",
    message: "Choose the API type",
    choices: [
      { title: 'Rest', value: 'rest' },
      { title: 'Graphql', value: 'graphql' },
    ]
  }
}

const languageQuestion = () => {
  return {
    type: "select",
    name: "languageType",
    message: "Which language this project uses?",
    choices: [
      { title: 'Javascript', value: 'js' },
      { title: 'Typescript', value: 'ts' },
    ]
  }
}

module.exports = {
  apiQuestion,
  languageQuestion
}
