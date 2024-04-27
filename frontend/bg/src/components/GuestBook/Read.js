import { useEffect, useState } from "react";
import { getBook } from "../../api/guestBookApi";
import useCustomMove from "../../hooks/useCustomMove";
import "./Read.css";
const initState = {
  no: 0,
  title: "",
  content: "",
  writer: "",
  date: null,
};
const Read = ({ no }) => {
  console.log(no);
  const [book, setBook] = useState(initState); //사용전
  const { moveToList } = useCustomMove();

  useEffect(() => {
    getBook(no).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [no]);
  return (
    <div
      className="w-3/5 p-6 m-2 rounded shadow-md "
      style={{ backgroundColor: "rgb(255,228,225)" }}
    >
      {makeDiv("<", book.no, "번 글>")}
      <div className="title font-extrabold">제목: {book.title}</div>
      <div className="">작성자: {book.writer}</div>
      <div className="mb-5">작성 날짜: {book.date}</div>
      <div
        className="rounded p-5 m-3"
        style={{ backgroundColor: "rgb(270,270,225)" }}
      >
        {book.content}
      </div>
    </div>
  );
};

const makeDiv = (title, content, value) => (
  <div>
    {title}
    {content}
    {value}
  </div>
);
export default Read;
