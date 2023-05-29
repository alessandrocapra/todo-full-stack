import express, { Express } from "express";

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5002;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
