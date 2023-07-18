import { validate } from ".";
import { describe, it, expect } from "vitest";

describe("`validate` function unit tests", () => {
  describe("happy path", () => {
    // Test credit card numbers come from PayPal
    // https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
    const cards = [
      ["American Express", "378282246310005"],
      ["American Express", "371449635398431"],
      ["American Express Corporate", "378734493671000"],
      ["Australian BankCard", "5610591081018250"],
      ["Diners Club", "30569309025904"],
      ["Diners Club", "38520000023237"],
      ["Discover", "6011111111111117"],
      ["Discover", "6011000990139424"],
      ["JCB", "3530111333300000"],
      ["JCB", "3566002020360505"],
      ["MasterCard", "5555555555554444"],
      ["MasterCard", "5105105105105100"],
      ["Visa", "4111111111111111"],
      ["Visa", "4012888888881881"],
      ["Visa", "4222222222222"],
      ["Dankort (PBS)", "5019717010103742"],
      ["Switch/Solo (Paymentech)", "6331101999990016"],
    ];

    cards.forEach(([name, number]) => {
      it(`should validate ${name} ${number}`, () => {
        expect(validate(number)).toBe(true);
      });
    });
  });

  describe("sad path", () => {
    it("should not validate an empty string", () => {
      expect(validate("")).toBe(false);
    });

    it("should not a string with letters", () => {
      expect(validate("aaaaaaaa")).toBe(false);
    });

    it("should not validate an invalid card number", () => {
      expect(validate("123456789")).toBe(false);
    });

    it("should not validate number less than 8 digits", () => {
      expect(validate("4111111")).toBe(false);
    });

    it("should not validate number more than 19 digits", () => {
      expect(validate("42424242424242424242")).toBe(false);
    });
  });
});
