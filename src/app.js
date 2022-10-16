import { config } from "dotenv-defaults";
import express from "express";
import cors from "cors";
import projects from "./projects/index.js";
import subcontractors from "./subcontractors/index.js";

// init dotenv with defaults
config();

const app = express();
const port = process.env.APP_PORT;

// allow cors
app.use(cors());

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/projects", projects);
app.use("/subcontractors", subcontractors);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
