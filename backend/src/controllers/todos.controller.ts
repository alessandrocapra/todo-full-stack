import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos = await prisma.todos.findMany();
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
