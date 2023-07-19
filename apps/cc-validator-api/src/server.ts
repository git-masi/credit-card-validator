import express, { Express, Request, Response } from "express";

export function createServer() {
  const app: Express = express();

  app.post("/validate", (req: Request, res: Response) => {
    res.send("Hello world!");
  });

  return app;
}
