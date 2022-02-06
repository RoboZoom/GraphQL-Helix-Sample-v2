import express from 'express';
import { Server } from "http";
import MasterRouter from './routers/master-router'

interface exitOptions {
  cleanup: boolean;
  exit: boolean;
}

class ApplicationServer {
  public app = express();
  public router = MasterRouter;
}

export const server = new ApplicationServer();
export let activeServer: Server;

server.app.use(express.json());
server.app.use('/api', server.router);


((port = process.env.APP_PORT || 5000) => {
  activeServer = server.app.listen(port, () => console.log(`|> 1 |> Listening on port ${port}`));
})();

function exitHandler(options: exitOptions, exitCode: any) {
  if (options.cleanup) console.log('clean');
  if (exitCode || exitCode === 0) console.log(`Exit Handler: ${exitCode}`);
  if (options.exit) process.exit();
}

//do something when app is closing
// process.on('exit', exitHandler.bind(null,{
//     cleanup:true,
//     exit: true}));

//catches ctrl+c event
process.on(
  'SIGINT',
  exitHandler.bind(null, {
    cleanup: false,
    exit: true
  })
);

// catches "kill pid" (for example: nodemon restart)
process.on(
  'SIGUSR1',
  exitHandler.bind(null, {
    cleanup: false,
    exit: true
  })
);
process.on(
  'SIGUSR2',
  exitHandler.bind(null, {
    cleanup: false,
    exit: true
  })
);

// catches uncaught exceptions
process.on(
  'uncaughtException',
  exitHandler.bind(null, {
    cleanup: false,
    exit: true
  })
);
