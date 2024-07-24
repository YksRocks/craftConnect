// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // This will send the cookies along with requests
});

export default instance;
