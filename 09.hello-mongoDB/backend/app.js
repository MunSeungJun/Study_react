import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const users = await readUsers();
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
