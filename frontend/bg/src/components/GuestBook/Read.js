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
    <div>
      {makeDiv(book.no, "번 글")}
      <div>작성자: {book.writer}</div>
      <div>작성 날짜: {book.date}</div>
      <div>제목: {book.title}</div>
      <div>내용: {book.content}</div>

      <button onClick={() => moveToList()}>list</button>
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
