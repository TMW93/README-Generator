const inquirer = require(`inquirer`);
const fs = require(`fs`);

inquirer
  .prompt([
    //project-name
    {
      type: `input`,
      message: `Enter your project title`,
      name: `projectname`,
    },
    //project-description
    {
      type: `input`,
      message: `Enter a description of your project`,
      name: `description`,
    },
    //project-install-instructions
    {
      type: `input`,
      message: `Enter installation instructions for your project`,
      name: `installion`,
    },
    //project-usage-info
    {
      type: `input`,
      message: `Enter usage information for your project`,
      name: `usage`,
    },
    //project-contribution-guidelines
    {
      type: `input`,
      message: `Enter contribution guidelines for your project`,
      name: `contribution`,
    },
    //project-test-instructions
    {
      type: `input`,
      message: `Enter test instructions for your project`,
      name: `test`,
    },
    //project-licenses
    {
      type: `checkbox`,
      message: `Select the license/s for your project`,
      name: `licenses`,
      choices: [`Apache License 2.0`, `GNU GeneralPublic License v3.0`, `MIT License`, `BSD 2-Clause Simplified License`, `BSD 3-Clause New or Revised License`, `Boost Software License 1.0`, `None`],
    },
    //github-username
    {
      type: `input`,
      message: `Enter your GitHub username`,
      name: `github`,
    },
    //user-email
    {
      type: `input`,
      message: `Enter your email`,
      name: `email`,
    },
  ])
  .then((response) => {
    // console.log(`Your project is named: ${response.projectname}`);
    // console.log(`Here is your project description: ${response.description}`);
    // console.log(`Here are the installation instructions for your project: ${response.installation}`);
    // console.log(`Here is the usuage information for your project: ${response.usage}`);
    // console.log(`Here are the contribution guidelines for your project: ${response.contribution}`);
    // console.log(`Here are the test instructions for your project: ${response.test}`);
    // console.log(`Here are your license/s for your project: ${response.licenses}`);
    // console.log(`Here is your GitHub username: ${response.github}`);
    // console.log(`Here is your email: ${response.email}`);

    const readmeTemplate = `
# ${response.projectname}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribuitn Guidelines](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [Licenses](#licenses)
- [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## Contribution Guidelines
${response.contribution}

## Test Instructions
${response.test}

## Licenses
${response.licenses}

## Questions
${response.github}
${response.email}
    `;

    fs.writeFile('generated-readme.md', readmeTemplate, (err) =>
      err ? console.error(err) : console.log('Success!')
    );
    
  });