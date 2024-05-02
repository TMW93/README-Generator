const inquirer = require(`inquirer`);

inquirer
  .prompt([
    {
      type: `input`,
      message: `Enter your project title`,
      name: `projectname`,
    },
    {
      type: `input`,
      message: `Enter a description of your project`,
      name: `description`,
    },
    {
      type: `input`,
      message: `Enter installation instructions for your project`,
      name: `installion`,
    },
    {
      type: `input`,
      message: `Enter usage information for your project`,
      name: `usage`,
    },
    {
      type: `input`,
      message: `Enter contribution guidelines for your project`,
      name: `contribution`,
    },
    {
      type: `input`,
      message: `Enter test instructions for your project`,
      name: `test`,
    },
    {
      type: `input`,
      message: `Enter your GitHub username`,
      name: `github`,
    },
    {
      type: `input`,
      message: `Enter your email`,
      name: `email`,
    },
  ])
  .then((response) => {
    console.log(`Your project is named: ${response.name}`);
    console.log(`Here is your project description: ${response.description}`);
    console.log(`Here are the installation instructions for your project: ${response.installation}`);
    console.log(`Here is the usuage information for your project: ${response.usage}`);
    console.log(`Here are the contribution guidelines for your project: ${response.contribution}`);
    console.log(`Here are the test instructions for your project: ${response.test}`);
    console.log(`Here is your GitHub username: ${response.github}`);
    console.log(`Here is your email: ${response.email}`);
  });