const axios = require("axios");

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/weather`, {
      params: {
        q: city,
        appid: process.env.OPENWEATHER_API_KEY,
        units: "metric",
      },
    });

    return response.data;
  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error.response?.data);
    console.log(error.message);

    throw new Error(error.response?.data?.message || error.message);
  }
};

module.exports = {
  fetchWeatherData,
};
