const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache 2.0 License':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'The MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case 'IBM Public License Version 1.0':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
      break;
    case 'Eclipse Public License 1.0':
      return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case 'None':
      return ''
      break;
  }
}
//['Apache 2.0 License', 'The MIT License', 'IBM Public License Version 1.0', 'Eclipse Public License 1.0', 'Boost Software License 1.0', 'None']
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'Apache 2.0 License':
      return `https://opensource.org/licenses/Apache-2.0`
      break;
    case 'The MIT License':
      return 'https://opensource.org/licenses/MIT'
      break;
    case 'IBM Public License Version 1.0':
      return 'https://opensource.org/licenses/IPL-1.0'
      break;
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0'
      break;
    case 'Boost Software License 1.0':
      return 'https://www.boost.org/LICENSE_1_0.txt'
      break;
    case 'None':
      return ''
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

 ${data.description}
  
  ## Table of Contents
  
  (If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license))
  
  ## Installation
  
  ${data.installIntruc}
  
  ## Usage
  
  ${data.usageInfo}



  ## License

  ${renderLicenseLink(data.license)}


  ## Contributing

  ${data.conGuide}
  
  ## Tests

  ${data.testInstruc}

  ## Questions

  GitHub Username: ${data.gitHub}

  https://github.com/${data.gitHub}

  ${data.email}
  

`;
}

