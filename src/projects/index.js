import express from "express";
import prisma from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const projects = await prisma.project.findMany();
  res.json(projects);
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
    console.log(e);
    res.status(500).json({ error: e.message });
  }
});

export default router;
