import express from "express";
import prisma from "../db.js";
import handleError from "../error.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const payrolls = await prisma.payroll.findMany({
      include: { draw: true, subcontractor: true },
    });
    res.json(payrolls);
  } catch (e) {
    handleError(e, res);
  }
});

router.post("/", async (req, res) => {
  try {
    const { draw, subcontractor } = req.body;
    const payroll = await prisma.payroll.create({
      data: {
        ...req.body,
        draw: { connect: { id: draw } },
        subcontractor: { connect: { id: subcontractor } },
      },
    });
    res.json(payroll);
  } catch (e) {
    handleError(e, res);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const { draw, subcontractor } = req.body;
    const data = req.body;

    if (draw) {
      data.draw = { connect: { id: draw } };
    }
    if (subcontractor) {
      data.subcontractor = { connect: { id: subcontractor } };
    }

    const payroll = await prisma.payroll.update({
      where: { id: req.params.id },
      data,
    });
    res.json(payroll);
  } catch (e) {
    handleError(e, res);
  }
});

export default router;
