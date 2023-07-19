import express, { Express, Request, Response } from "express";
import { z } from "zod";

const reqBodySchema = z.object({
  cardNumber: z.string(),
});

export function createServer() {
  const app: Express = express();

  app.post("/credit-cards/validate", (req: Request, res: Response) => {
    const body = reqBodySchema.safeParse(req.body);

    if (!body.success) {
      res.status(400).send("Bad request");
      return;
    }

    res.send("Ok");
  });

  return app;
}
