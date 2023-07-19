import supertest from "supertest";
import { createServer } from "./server";
import { describe, it } from "vitest";

describe("server integration tests", () => {
  const app = createServer();

  it("should return a 400 if there is no request body", async () => {
    await supertest(app).post("/validate").expect(400);
  });
});
