import { useEffect, useState } from "react";
import { getBook } from "../../api/guestBookApi";

const initState = {
  no: 0,
  title: "",
  writer: "",
  Date: null,
};
const Read = ({ no }) => {
  const [book, setBook] = useState(initState); //사용전
  useEffect(() => {
    getBook(no).then((data) => {
      console.log(data);
      setBook(data);
    });
  }, [no]);
  return <div></div>;
};

export default Read;
