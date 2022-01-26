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
