import { log, time } from 'node:console';
import fs from 'node:fs';
import path = require('node:path');

// fs.readFile('./index.html', 'utf-8', (err: any, data: string) => {
//   if (err) {
//     throw err;
//   } else {
//     // console.log(data);
//   }
// });

// const data = fs.readFileSync('./index.html', 'utf-8');

// // console.log('reading: ', data);

// let pathData = path.join(__dirname, 'number.txt');
// // console.log(pathData);

// function loop() {
//   for (let i = 0; i <= 10; i++) {
//     // console.log(i);
//   }
// }

// fs.writeFile(data, 'this are the numbers', () => {
//   console.log('done');
// });

// fs.unlink(pathData, (err) => {
//   console.log('deleted');
// });

// const myFile = path.join(__dirname, 'data', 'firstCount.txt');
// const myFile1 = path.join(__dirname, 'data', 'secondCount.txt');

// const writeToFile = (numb: number) => {
//   console.log('started');

//   fs.open(myFile, 'W', (err: any, data: any) => {
//     if (err) {
//       throw err;
//     } else {
//       for (let i = 0; i <= numb; i++) {
//         fs.write(data, `${i}`, () => {});
//       }
//     }
//     console.log('started');
//   });
// };

// writeToFile(100000);

let count = path.join(__dirname, 'Data', 'count.txt');
let fsCountCopy = path.join(__dirname, 'Data', 'fsCountCopy.txt');
let countCopy = path.join(__dirname, 'Data', 'countCopy.txt');

let mypath = path.join(__dirname, 'Data', 'greetings.txt');
let mypath1 = path.join(__dirname, 'Data', 'hello.txt');

// const file = fs.writeFile(mypath, 'this is odinakachi', () => {
//   console.log('done writing');
// });

const countWrite = (x: number) => {
  fs.open(count, 'w', (err: any, data: any) => {
    if (err) throw err;

    for (let i = 0; i < x; i++) {
      fs.write(data, `${i} `, () => {});
    }

    console.log('done writing');
  });
};

// countWrite(10000);

fs.readFile(count, 'utf-8', (err: any, data: any) => {
  if (err) throw err;

  fs.writeFile(fsCountCopy, data, () => {
    console.log('complete copy');
    console.timeEnd('fs copy');
  });
});

let readData = fs.createReadStream(count);
let writeData = fs.createWriteStream(countCopy);

console.time('streaming copy');

readData.on('data', (chunk) => {
  writeData.write(chunk);
});
console.timeEnd('streaaming copy');

console.time('streaming with PIPE');
fs.createReadStream(count).pipe(fs.createWriteStream(countCopy));
