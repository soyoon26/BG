import { useEffect, useState } from "react";

const initState = {
  no: 0,
  content: "",
  writer: "",
  date: "null",
};

const Modify = ({ no }) => {
  const [guestBook, setGuestBook] = useState({ ...initState });

  useEffect(() => {}, [no]);
  return (
    <div>
      <div>Todo Modify</div>
      <div>Todo Modify</div>
    </div>
  );
};

export default Modify;
