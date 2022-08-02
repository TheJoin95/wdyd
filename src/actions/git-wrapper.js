const { exec } = require("child_process")
const clc = require("cli-color")

const gitStatusCheck = require("./git-status-check")

const error = clc.red.bold
const warn = clc.yellow
const notice = clc.blue
const success = clc.green

module.exports = (cmd, scope, subject, body = undefined, footer = undefined) => {
    scope = scope.trim()
    subject = subject.toLocaleLowerCase().trim()
    body = body !== undefined ? `\n\n${body.toLocaleLowerCase()}` : ''
    footer = footer !== undefined ? `\n${footer.trim()}` : ''

    gitStatusCheck()

    if (body.length === 0) {
        console.log(notice('Sometimes it\'s better to specify a body to be more descriptive'))
    }

    if (subject.length < 2 || scope.length < 2) {
        console.log(error('Scope and subject are mandatory and explainatory'))
        return false
    }

    if (subject.length < 10) {
        console.log(warn('Your message is short, be careful'))
    }

    exec(`git commit -m \'${cmd}(${scope}): ${subject}${body}${footer}\'`, (err, stdout) => {
        if (err) {
            console.error(error(err))
            return
        }

        console.log(success(stdout))
    })
}
