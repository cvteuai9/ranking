const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/ranking")
  .then(() => console.log("MongoDB 連線成功"))
  .catch((err) => console.error("MongoDB 連線失敗", err));

const playerSchema = new mongoose.Schema({
  name: String,
  score: Number,
});
const Player = mongoose.model("Player", playerSchema);

// 新增或更新玩家分數
app.post("/addScore", async (req, res) => {
  const { name, score } = req.body;

  try {
    const player = await Player.findOne({ name });
    if (player) {
      if (score > player.score) {
        player.score = score;
        await player.save();
      }
    } else {
      await Player.create({ name, score });
    }
    res.status(200).send("Player score added/updated.");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 查詢排行榜
app.get("/ranking", async (req, res) => {
  try {
    const players = await Player.find().sort({ score: -1 }).limit(10);
    res.status(200).json(players);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
