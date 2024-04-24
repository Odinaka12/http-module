import fs from 'node:fs';
import path from 'node:path';
import http, { IncomingMessage, ServerResponse } from 'node:http';

const port: number = 5544;

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    const filePath = path.join(__dirname, 'onePageHtml', 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) throw err;

      res.end(data);
    });
  }
);

server.listen(port, () => {
  console.log('congratulations');
});
