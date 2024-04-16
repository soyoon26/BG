import { useEffect, useState } from "react";
import { getBook } from "../../api/guestBookApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  no: 0,
  title: "",
  writer: "",
  date: null,
};
const Read = ({ no }) => {
  console.log("나와라", no);
  const [book, setBook] = useState(initState); //사용전
  const { moveToList } = useCustomMove();

  useEffect(() => {
    getBook(no).then((data) => {
      console.log(data, "데이터도 안나옴?");
      setBook(data);
    });
  }, [no]);
  return (
    <div>
      {makeDiv("No", book.no)}
      {makeDiv("Writer", book.writer)}
      {makeDiv("Content", book.content)}
      {makeDiv("Date", book.date)}

      <button onClick={() => moveToList()}>list</button>
    </div>
  );
};

const makeDiv = (title, value) => (
  <div>
    {title}
    {value}
  </div>
);
export default Read;
