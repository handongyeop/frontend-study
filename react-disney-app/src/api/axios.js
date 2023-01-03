import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "8fb28b9ceaea8d999b6b932f17e4d1eb",
    language: "ko-kr",
  },
});

export default instance;
