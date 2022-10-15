import express from "express";
import prisma from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
});

export default router;
