import { test, expect } from "@playwright/test";

test.describe("credit card validator", () => {
  test.beforeEach(({ page }) => {
    // In the future this URL could be configurable
    page.goto("http://localhost:5173");
  });

  test("valid credit card", async ({ page }) => {
    await page.getByLabel("Credit Card Number").fill("4242424242424242");

    await page.getByRole("button").click();

    const successMessage = page.getByText("Valid card number");

    await expect(successMessage).toBeVisible();
  });

  test("invalid credit card", async ({ page }) => {
    await page.getByLabel("Credit Card Number").fill("123456789");

    await page.getByRole("button").click();

    const errorMessage = page.getByText("Invalid card number");

    await expect(errorMessage).toBeVisible();
  });
});
