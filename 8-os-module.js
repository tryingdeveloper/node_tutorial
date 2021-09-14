const os = require('os');
// info about current user
const user = os.userInfo();
console.log(user);
//method to determine the uptime of the system
console.log(`Up time of the system ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);