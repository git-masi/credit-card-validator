import supertest from "supertest";
import { createServer } from "./server";
import { describe, it } from "vitest";

describe("server integration tests", () => {
  const app = createServer();

  it("should return status 400 if there is no request body", async () => {
    await supertest(app).post("/credit-cards/validate").expect(400);
  });
});
