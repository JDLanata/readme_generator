const genRead = require('./genRead')
const fs = require('fs');
const inquirer = require('inquirer');

function userPromt() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project called?',

        },
        {
            type: 'input',
            name: 'install',
            message: 'How is your project installed?',

        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe how your project works?',

        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?',

        },
        {
            type: 'input',
            name: 'credit',
            message: 'Are there any contributors to the project?',

        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can others contribute to the project?',

        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions if any?',

        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub profile name?',

        },
        {
            type: 'input',
            name: 'linkedIn',
            message: 'What is your LinkedIn username?',

        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What licenses would you like to add?',
            choices: [
                {
                    name: 'Modzilla',
                    value: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
                },
                {
                    name: 'MIT',
                    value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',

                },
                {
                    name: 'GNU',
                    value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
                },]


        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        }

    ])
        .then((ans) => {


            fs.writeFile('./output/README.md', genRead(ans), (err) => {
                err ? console.log(err) : console.log('Success!')
            })
        })
}

userPromt();