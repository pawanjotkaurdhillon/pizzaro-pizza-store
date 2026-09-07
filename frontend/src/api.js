import axios from "axios";

const API = axios.create({
  baseURL: "https://pizzaro-pizza-store.onrender.com/api",
});

export default API;