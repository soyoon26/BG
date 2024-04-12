import axios from "axios";

export const API_SERVER_CARD = "http://localhost:8080";

const prefixBook = `${API_SERVER_CARD}/api/questbook/`;

export const getBook = async (no) => {
  const res = await axios.get(`${prefixBook}/${no}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefixBook}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

export const deleteOne = async (no) => {
  const res = await axios.delete(`${prefixBook}/${no}`);
  return res.data;
};

export const putOne = async (guestbook) => {
  const res = await axios.put(`${prefixBook}/${guestbook.no}`);
};
