const express = require("express");
const songRoutes = require("./routes/song.routes");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", songRoutes);
module.exports = app;
