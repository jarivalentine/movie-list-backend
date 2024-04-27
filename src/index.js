import express from "express";
import router from "./routes.js";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  })
);

app.use("/", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
