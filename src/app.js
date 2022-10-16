import { config } from "dotenv";
import express from "express";
import cors from "cors";
import projects from "./projects/index.js";
import subcontractors from "./subcontractors/index.js";
import draws from "./draws/index.js";
import payrolls from "./payrolls/index.js";

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
app.use("/draws", draws);
app.use("/payrolls", payrolls);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
