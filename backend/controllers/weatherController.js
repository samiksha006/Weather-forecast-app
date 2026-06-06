const { fetchWeatherData } = require("../services/weatherService");

const getCurrentWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const weatherData = await fetchWeatherData(city);

    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getCurrentWeather,
};
