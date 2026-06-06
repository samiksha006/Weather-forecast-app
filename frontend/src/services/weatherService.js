import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getWeather = async (city) => {
  const response = await axios.get(`${API_URL}/weather/${city}`);

  return response.data;
};
