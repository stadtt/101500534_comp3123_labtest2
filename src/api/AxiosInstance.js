import axios from "axios";
console.log('What is axios?', axios)


const BASE_URL = "https://api.openweathermap.org/data/2.5";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});





export default axiosInstance