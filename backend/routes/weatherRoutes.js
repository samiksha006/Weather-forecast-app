const express = require("express");
const router = express.Router();

const {
  getCurrentWeather,
} = require("../controllers/weatherController");

router.get("/weather/:city", getCurrentWeather);

module.exports = router;