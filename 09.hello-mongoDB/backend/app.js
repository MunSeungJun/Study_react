import express from "express";
import cors from "cors"

const app = express();
const port = 3000;

let data = [
  {
    title: "베놈",
    body: "라스트댄스",
    poster:"https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88526/88526228543_727.jpg"
  },
  {
    title: "앤트맨3",
    body: "앤트맨과 와스프:퀀텀매니아",
    poster: "https://i.namu.wiki/i/nnp9C2olFSiynNuH6ThWtj1MVp-K5JriFiNJ-Z9zSdBMjXQiIqFDm4efTUHCrlkcgPBO9aeCdtjnTZlPcLJJV2_hUYGZI8vibWUMkwo2njPuvrAeSrgZAEzfSCW2SnBfMLnSUs2n0bDVCaYLiBI4Aw.webp"
  },
  {
    title:"캡틴아메리카",
    body: "브레이브 뉴 월드",
    poster: "https://img.megabox.co.kr/SharedImg/2025/02/13/1jdpUspecOw7ldttTVYfi6DJ40Wf0MM9_420.jpg"
  }
  
];

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.json(data);
});

app.post('/movie', (req, res) => {
  let {title, body, poster} = req.body
  data.push({ 
    title: title,
    body: body,
    poster: poster
  })
  console.log(data)
  res.send(200)
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
