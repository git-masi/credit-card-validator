import { createServer } from "./server";

const port = process.env["PORT"] ?? 8080;
const app = createServer();

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
