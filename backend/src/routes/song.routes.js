const express = require("express");

const router = express.Router();

const songModel = require("../models/song.model")

const multer = require("multer");
const uploadFile = require("../service/storage.service");

const upload = multer({ storage: multer.memoryStorage() });

router.post("/songs", upload.single("audio"), async (req, res) => {
  
  console.log(req.body);

  console.log(req.file);

  if (!req.file) {
      return res.status(400).json({ message: "Audio file is required" });
    }

    if (!req.file.mimetype.startsWith("audio/")) {
      return res.status(400).json({ message: "Only audio files allowed" });
    }


  const fileData = await uploadFile(req.file);

  const song = await songModel.create({
    title:req.body.title,
    artist:req.body.artist,
    audio:fileData.url,
    mood:req.body.mood
  })

  console.log(fileData);

  res.status(201).json({
    message: "Song created successfully",
    song: song,
  });
});

module.exports = router;
