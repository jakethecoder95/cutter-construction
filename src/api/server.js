import axios from "axios";

export default axios.create({
  baseUrl:
    "http://robinson-endpoints.netlify.com/.netlify/functions/api/cutter-construction"
  // baseURL: "http://localhost:9000/.netlify/functions/api/cutter-construction"
});
