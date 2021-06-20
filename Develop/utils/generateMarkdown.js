
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.name}

  Table of Contents:
  1. [Description](#Description)
  2. [Installation](#Installation)
  3. [Usage](#Usage)
  4. [Contributing](#Contributing)
  5. [Tests](#Tests)
  6. [License](#License)
  7. [Questions](#Questions)


  ## Description 
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Questions
  For any questions use the following contact information:
  - [${data.github}](https://github.com/${data.github})
  - ${data.email}

`;
}

module.exports = generateMarkdown;
