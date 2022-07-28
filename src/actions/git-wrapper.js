const { exec } = require("child_process")
var clc = require("cli-color")

const error = clc.red.bold
const warn = clc.yellow
const notice = clc.blue
const success = clc.green

module.exports = (cmd, scope, subject, body = undefined, footer = undefined) => {
    scope = scope.trim()
    subject = subject.toLocaleLowerCase().trim()
    body = body !== undefined ? `\n\n${body.toLocaleLowerCase()}` : ''
    footer = footer !== undefined ? `\n${footer.trim()}` : ''

    if (body.length === 0) {
        console.log(notice('Sometimes it\'s better to specify a body to be more descriptive'))
    }

    if (subject.length < 2 || scope.length < 2) {
        console.log(error('Scope and subject are mandatory and explainatory'))
        return false
    }

    if (subject.length < 10) {
        console.log(warn('Your message is short, be carefoul'))
    }

    exec(`git status`, (err, stdout) => {
        if (err) {
            console.error(error(err))
            return
        }

        const regex = /no changes added to commit/g;
        const nothingAdded = stdout.match(regex);

        nothingAdded.length !== 0 ? console.log(warn('You forgot to add your files to the staging area. Try to do git add .')) :
            exec(`git commit -m \'${cmd}(${scope}): ${subject}${body}${footer}\'`, (err, stdout) => {
                if (err) {
                    console.error(error(err))
                    return
                }

                console.log(success(stdout))
            })
    })
}