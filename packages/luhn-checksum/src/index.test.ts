/**
 * Test credit card numbers come from PayPal
 * https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.htm
 */
import { validate } from ".";
import { describe, test, expect } from "vitest";

describe("", () => {
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
    test(`It should validate ${name} ${number}`, () => {
      expect(validate(number)).toBe(true);
    });
  });
});
