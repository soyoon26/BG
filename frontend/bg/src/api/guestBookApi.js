import axios from "axios";

export const API_SERVER_CARD = "http://localhost:8080";

const prefixBook = `${API_SERVER_CARD}/api/questbook/`;

export const getBook = async (tno) => {
  const res = await axios.get(`${prefixBook}/${tno}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefixBook}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};
