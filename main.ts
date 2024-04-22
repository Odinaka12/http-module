import path = require('node:path');

process.on('beforeExit', () => {
  console.log('i am ready');
});

process.on('uncaughtException', () => {
  console.log('quit');
});

import os from 'node:os';

console.log(os.platform());
console.log(os.release());

let val = parseInt(os.cpus()[0].model.split('-')[1].split(' ')[0][0]);

if (val === 3) {
  console.log('this is a 3rd Gen PC');
} else if (val === 5) {
  console.log('this is a 5rd Gen PC');
} else if (val === 7) {
  console.log('this is a 7rd Gen PC');
} else if (val === 9) {
  console.log('this is a 9rd Gen PC');
} else {
  console.log('Your generation is not found');
}

function gen() {
  // console.log(os.cpus()[0].model.split('-')[1].split(' ')[0][0]);
  console.log(os.platform());
}
gen();

console.log(os.hostname());

let mem: number = os.freemem() / (1024 * 1024 * 1024);
console.log(`${parseFloat(mem.toFixed(2))}GB`);
console.log(os.networkInterfaces());

let pathDir = path.join(__dirname, 'index.html');

console.log(path.basename(pathDir));

let index = path.extname('.//path/index.html');

console.log(index);
