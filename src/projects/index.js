import express from "express";
import prisma from "../db.js";
import handleError from "../error.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: { subcontractors: true, draws: { include: { payrolls: true } } },
    });
    res.json(projects);
  } catch (e) {
    handleError(e, res);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: { id: req.params.id },
      include: { subcontractors: true, draws: { include: { payrolls: true } } },
    });
    res.json(project);
  } catch (e) {
    handleError(e, res);
  }
});

router.post("/", async (req, res) => {
  try {
    const { subcontractors } = req.body;
    const project = await prisma.project.create({
      data: {
        ...req.body,
        subcontractors: { connect: subcontractors.map((val) => ({ id: val })) },
      },
    });
    res.json(project);
  } catch (e) {
    handleError(e, res);
  }
});

export default router;
