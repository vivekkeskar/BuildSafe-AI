const express = require("express");
const cors = require("cors");

const inspectionRoutes = require("./routes/inspectionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "🚀 SafeVision AI Backend Running",
  });
});

app.use("/api/inspection", inspectionRoutes);

module.exports = app;