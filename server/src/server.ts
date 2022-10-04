import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "League of Legends" },
    { id: 2, name: "Dota 2" },
    { id: 3, name: "Counter Strike Global Offensive" },
  ]);
});

app.listen(3333);
