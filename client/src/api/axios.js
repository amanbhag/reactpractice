import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:3080/" });

export default client;
