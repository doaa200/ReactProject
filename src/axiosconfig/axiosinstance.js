import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  params:{
  api_key:"1e379c5dab51cb8d3b0f9672fa235574"
  }
});
export default axiosInstance;
