const { Command } = require('commander')
const gitWrapper = require('./actions/git-wrapper')
const commands = require('./constants/commands')
const wdyd = new Command()

wdyd
    .name('WDYD')
    .description('What Did You Did - A node CLI utility to write via interface great commit message (conventional commit guidelines)')
    .version('0.0.1')

commands.forEach((command) => {
    wdyd.command(command.name)
        .description(command.description)
        .argument('<scope>', 'The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.')
        .argument('<subject>', 'The subject contains a succinct description of the change: use the imperative, present tense: \'change\' not \'changed\' nor \'changes\', don\'t capitalize the first letter, no dot (.) at the end')
        .argument('[body]', 'Use the imperative, present tense: \'change\' not \'changed\' nor \'changes\'. The body should include the motivation for the change and contrast this with previous behavior.')
        .argument('[footer]', 'The footer should contain any information about Breaking Changes and is also the place to reference GitHub issues that this commit Closes.')
        .action((scope, subject, body, footer) => gitWrapper(command.name, scope, subject, body, footer))
})

wdyd.parse()