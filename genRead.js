const genReadMe = (data) => {
return   `# ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents 
    If your README is long, add a table of contents to make it easy for users to find what they need.
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contact](#contact)
    ## Installation
    What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    ## Usage
    ${data.usage}
    ## Credits
    ${data.credit}
    ## License
    ${data.license}
    ---
    ## Features
    If your project has a lot of features, list them here.

    
    ## How to Contribute
  ${data.contribution}
    ## Tests
    ${data.tests}
    ##Contact
    https://github.com/${data.gitHub}
    https://www.linkedin.com/in/${data.linkedIn}/
    Email: ${data.email}
    
    `

}

module.exports = genReadMe