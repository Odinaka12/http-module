import fs, { write } from 'node:fs';
import path from 'node:path';
import http, {
  IncomingHttpHeaders,
  IncomingMessage,
  ServerResponse,
} from 'node:http';
import { error } from 'node:console';

const port: number = 5577;

const server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
> = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200);

    const filePath = path.join(__dirname, 'html', 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) throw err;
    });
    res.end('awesome');
  }
);

server.listen(port, () => {
  console.log('server connected');
});
