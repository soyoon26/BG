import axios from "axios";

export const API_SERVER_CARD = "http://localhost:8080";

const prefix = `${API_SERVER_CARD}/api/cards/view`;
export const getOne = async (fileName) => {
  const res = await axios.get(`${prefix}/${fileName}`);
  return res.data;
};
