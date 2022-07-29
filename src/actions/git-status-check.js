const { exec } = require("child_process")
var clc = require("cli-color")

const error = clc.red.bold
const notice = clc.blue
const success = clc.green

module.exports = () => {
    exec(`git status --porcelain | grep ^[AMDR] | awk '{ print $2 }'`, (err, stdout) => {
        if (err) {
            console.error(error(err))
            return
        }

        if (stdout.trim() === '') {
            console.log(error('Nothing to commit, please check again and run at least \'git add <filename>\'.\nExiting'))
            process.exit()
        } else {
            console.log(notice('\n\nYou are commiting the following files:'))
            console.log(success(stdout))
        }

    })
}
