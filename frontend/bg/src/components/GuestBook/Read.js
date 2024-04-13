import { useEffect, useState } from "react";
import { getBook } from "../../api/guestBookApi";

const initState = {
  no: 0,
  title: "",
  writer: "",
  date: null,
};
const Read = ({ no }) => {
  const [book, setBook] = useState(initState); //사용전
  useEffect(() => {
    getBook(no).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [no]);
  return (
    <div>
      {makeDiv("No", book.no)}
      {makeDiv("Writer", book.writer)}
      {makeDiv("Content", book.content)}
      {makeDiv("Date", book.date)}
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
