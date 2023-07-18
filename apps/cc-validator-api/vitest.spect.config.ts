import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.spec.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
  },
});