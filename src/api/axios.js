import axios from "axios";

const insance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_DB_API_KEY,
    language: "ko-KR",
  }
})

// file 외부에서도 쓸 수 있게
export default insance