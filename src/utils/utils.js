import axios from "axios";
import { BASE_URL } from "./BaseURL";

export const getCandidates = (selectedPage = 1, withPhotos) => {
  return axios.get(`${BASE_URL}/summaries`,
    {params: {
      page: selectedPage,
      photo: withPhotos,
    }}
  );
}
