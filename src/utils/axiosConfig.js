import axios from "axios";

const axiosBaseUrl = axios.create({
  baseURL: "http://localhost:8000/api",
});
export default axiosBaseUrl;
