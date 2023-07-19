import express, { Express, Request, Response } from "express";
import { validate } from "luhn-checksum";
import { z } from "zod";

const reqBodySchema = z.object({
  cardNumber: z.string(),
});

export function createServer() {
  const app: Express = express();

  app.use(express.json());

  app.post("/credit-cards/validate", (req: Request, res: Response) => {
    const body = reqBodySchema.safeParse(req.body);

    if (!body.success) {
      return res
        .status(400)
        .send(
          "The request body should be an object with the signature: { cardNumber: string }"
        );
    }

    if (!validate(body.data.cardNumber)) {
      return res.status(400).send("The card number is invalid");
    }

    res.send("Ok");
  });

  return app;
}
