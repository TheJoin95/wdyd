const inquirer = require('inquirer');
const gitWrapper = require('./git-wrapper');

const questions = [
    {
        type: 'list',
        name: 'cmd',
        message: 'Select the one that fit for your changes. What did you do?',
        choices: [
            {
                value: 'build',
                name: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)'
            },
            {
                value: 'chore',
                name: 'Upgrading, migrating, deprecating a dependency or packages'
            },
            {
                value: 'ci',
                name: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)'
            },
            {
                value: 'docs',
                name: 'Documentation only changes'
            },
            {
                value: 'feat',
                name: 'A new feature'
            },
            {
                value: 'fix',
                name: 'A bug fix'
            },
            {
                value: 'perf',
                name: 'A code change that improves performance'
            },
            {
                value: 'refactor',
                name: 'A code change that neither fixes a bug nor adds a feature'
            },
            {
                value: 'revert',
                name: 'Going back specifying what went wrong and when'
            },
            {
                value: 'style',
                name: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)'
            },
            {
                value: 'test',
                name: 'Adding missing tests or correcting existing tests'
            }
        ],
    },
    {
        type: 'input',
        name: 'scope',
        message: 'What scope did you focus on?',
        validate: function (value) {
            let valid = (value !== '' && value !== undefined);
            return valid || 'Please specify a scope';
        }
    },
    {
        type: 'input',
        name: 'subject',
        message: 'Describe your change in an emperative way:',
        validate: function (value) {
            let valid = (value !== '' && value !== undefined);
            return valid || 'Pleasy specify a short description';
        }
    },
    {
        type: 'input',
        name: 'body',
        message: 'Include the motivation for the change and contrast this with previous behavior:',
        default: undefined
    },
    {
        type: 'input',
        name: 'footer',
        message: 'Type The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes:'
    }
];

module.exports = () => {
    inquirer.prompt(questions).then(({ cmd, scope, subject, body, footer }) => {
        body = body === '' ? undefined : body
        footer = footer === '' ? undefined : footer

        gitWrapper(cmd, scope, subject, body, footer)
    })
}