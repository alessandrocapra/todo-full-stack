import express, { Express } from "express";
import todosRoutes from './routes/todos.routes';

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5002;

app.use("/todos", todosRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
