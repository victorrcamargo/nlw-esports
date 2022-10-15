import express, { response } from "express";

const app = express();

// HTTP Methods / API Restful / HTTP Codes
// GET, POST, PUT, PATCH, DELETE
//Query params sao usados quando queremos persistir estados.


app.get('/games', (req, res) => {
  return res.status(201).json(["games"]);
})

app.post('/ads', (req, res) => {
  return res.status(201).json([]);
})

app.get("/games/:id/ads", (req, res) => {
  // const gameId = req.params.id;
  // return res.send(gameId);
  return res.status(200).json([
    { id: 1, name: "Anúncio 1" },
    { id: 2, name: "Anúncio 2" },
    { id: 3, name: "Anúncio 3" },
    { id: 3, name: "Anúncio 4" },
  ]);
});

app.get("/ads/:id/discord", (req, res) => {
  const adId = req.params.id;
  return res.status(200).json([adId]);
});

app.listen(3333);
