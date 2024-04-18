import axios from "axios";

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export const exerciseOptions = {
  method: "GET",
  params: { limit: "100" },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await axios.get(url, options);

  // console.log(response.data);
  return response.data;
};

// export const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   const data = await response.json();

//   // console.log(data);
//   return data;
// };
