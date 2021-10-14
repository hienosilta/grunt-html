import { execFile } from 'node:child_process';

function javadetect(callback) {
  execFile('java', ['-version'], (error, stdout, stderr) => {
    if (error) {
      return callback(error);
    }

    const version = stderr.match(/(?:java|openjdk) version "(.*)"/)[1];
    const arch = /64-Bit/.test(stderr) ? 'x64' : 'ia32';

    callback(null, { version, arch });
  });
}

export { javadetect };
