import { useState } from "react";
import { postAdd } from "../../api/guestBookApi";

const today = new Date();
const initState = {
  content: "",
  writer: "",
  date: today.toISOString().substring(0, 10),
};

const Add = () => {
  const [guestBook, setGuestBook] = useState({ ...initState });
  const handleChange = (e) => {
    guestBook[e.target.name] = e.target.value;
    setGuestBook({ ...guestBook });
  };
  const handleClickAdd = () => {
    postAdd(guestBook)
      .then((result) => {
        console.log(result);
        setGuestBook({ ...initState });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <div>방명록</div>
      <input
        name="content"
        type={"text"}
        value={guestBook.content}
        onChange={handleChange}
      ></input>
      <input
        name="writer"
        type={"text"}
        value={guestBook.writer}
        onChange={handleChange}
      ></input>
      <button type="button" onClick={handleClickAdd}>
        ADD
      </button>
    </div>
  );
};

export default Add;
