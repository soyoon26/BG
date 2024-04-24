import { useState } from "react";
import { postAdd } from "../../api/guestBookApi";
import Modal from "../Common/Modal";
const today = new Date();
const initState = {
  content: "",
  writer: "",
  date: today.toISOString().substring(0, 10),
};
const Add = () => {
  const [result, setResult] = useState(null);
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
        setResult(result);
        console.log(result.NO);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const closeModal = () => {
    setResult(null);
  };

  return (
    <div>
      {result ? (
        <Modal content={"등록되었습니다."} callbackFn={closeModal} />
      ) : (
        <></>
      )}
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
