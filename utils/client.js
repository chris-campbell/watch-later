import axios from "axios";

const client = axios.create({
  baseURL: "http://image.tmdb.org/t/p/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

export default client;
