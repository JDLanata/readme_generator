const genReadMe = (data) => {
return `# ${data.title}

${data.license}

## Description

${data.description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Screenshots](#screenshots)
- [Contact](#contact)

## Installation

${data.install}

---
## Usage

${data.usage}


---
## Credits

${data.credit}


---
## License

${data.license}

---
## Contribute
How to Contribute

${data.contribution}

---
## Tests

${data.tests}

---

## Screenshots 

--
## Contact

GitHub: https://github.com/${data.gitHub}

LinkedIn: https://www.linkedin.com/in/${data.linkedIn}

Email: ${data.email}

`

}

module.exports = genReadMe