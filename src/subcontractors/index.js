import express from "express";
import prisma from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const subcontractors = await prisma.subcontractor.findMany();
  res.json(subcontractors);
});

export default router;
