import express from "express";
import cors from "cors";
import { readUsers } from "./crud-read.js";
import { createUsers } from './crud-create.js'

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/list", async (req, res) => {
  const users = await readUsers();
  res.json(users);
});

app.post('/add', (req, res) => {
  createUsers(req.body)
  res.status(200)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
