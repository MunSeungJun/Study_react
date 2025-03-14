import express from "express";

const app = express();
const port = 3000;

const data = [
  {
    title: "hello",
    body: "world!",
  },
];

app.get("/", (req, res) => {
  res.send(JSON.stringify(data));
});

app.post('/movie', (req, res) => {
  const {title, body} = req.body
  data.pop({
    title: title,
    body: body
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
