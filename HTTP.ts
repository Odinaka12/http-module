import { log } from 'console';
import { Socket } from 'dgram';
import fs from 'node:fs';
import path = require('node:path');
// import http from 'node:http';
import http, { IncomingMessage, ServerResponse } from 'node:http';

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   } else if (req.url === '/codelab/courses') {
//     res.write(JSON.stringify([1, 3, 5]));
//     res.end();
//   }
// });

// server.on('connection', (Socket) => {
//   console.log('New connection');
// });

// server.listen(4000);

const port: number = 2211;

let count = path.join(__dirname, 'Story', 'story.txt');

const file = fs.writeFile(count, 'this is odinakachi', () => {
  console.log('done writing');
  const server = http.createServer(
    (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
      // res.writeHead(200, { 'content-Type': 'application/json' });
      res.write('<h1>This is me </h1>');
      res.write('<p>This is me </p>');

      const data = [
        { id: 1, name: 'peter', matNo: Math.floor(Math.random() * 1000) },
      ];
      res.end();
    }
  );

  server.listen(port, () => {
    log(`server listening`);
  });
});
