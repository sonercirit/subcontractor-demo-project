import express from "express";
import prisma from "../db.js";
import handleError from "../error.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const draws = await prisma.draw.findMany({
      include: { project: true },
    });
    res.json(draws);
  } catch (e) {
    handleError(e, res);
  }
});

router.post("/", async (req, res) => {
  try {
    const { project } = req.body;
    const draw = await prisma.draw.create({
      data: {
        ...req.body,
        project: { connect: { id: project } },
      },
    });
    res.json(draw);
  } catch (e) {
    handleError(e, res);
  }
});

export default router;
