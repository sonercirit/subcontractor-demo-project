import express from "express";
import prisma from "../db.js";
import handleError from "../error.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await prisma.project.findMany();
    res.json(projects);
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
