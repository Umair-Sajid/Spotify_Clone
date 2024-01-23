import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3300",
  headers: {
    "Content-Type": "application/Json",
  },
  timeout: 10000,
});

export default axiosInstance;
