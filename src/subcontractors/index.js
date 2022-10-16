import express from "express";
import prisma from "../db.js";
import handleError from "../error.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const subcontractors = await prisma.subcontractor.findMany();
    res.json(subcontractors);
  } catch (e) {
    handleError(e, res);
  }
});

export default router;
