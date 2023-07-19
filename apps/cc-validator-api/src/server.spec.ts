import supertest from "supertest";
import { createServer } from "./server";
import { describe, expect, it } from "vitest";

describe("server integration tests", () => {
  const app = createServer();

  describe("sad path", () => {
    it("should return status 400 if there is no request body", async () => {
      await supertest(app).post("/credit-cards/validate").expect(400);
    });

    it("should return a helpful error message if there is no request body", async () => {
      const response = await supertest(app).post("/credit-cards/validate");
      expect(response.text).contains(
        "should be an object with the signature: { cardNumber: string }"
      );
    });

    it("should return a helpful error message if validation fails", async () => {
      const response = await supertest(app)
        .post("/credit-cards/validate")
        .send({
          cardNumber: "123456789",
        })
        .set("Content-Type", "application/json");
      expect(response.text).contains("is invalid");
    });
  });
});
