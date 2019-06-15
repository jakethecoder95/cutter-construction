import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 7378a1efbddb3ed1142a048a9da65156f260b2e806ed93fd73a0b7b35313418f"
  }
});
