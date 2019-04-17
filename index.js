const cp = require('child_process');

function execCommand(command) {
    cp.exec(command, (err, stdout, stderr) => {
        if (err) {
            console.log(`Error: ${err}`); return;
        }
        if (stdout) console.log(`Standard Out: \n ${stdout}`);
        if (stderr) console.log(`Standard Out: \n ${stdout}`);
    });
}

execCommand('node ./src/script --base=10');