import { useState } from "react";
import { postAdd } from "../../api/guestBookApi";
import Modal from "../Common/Modal";
import "./Add.css";
const today = new Date();
const initState = {
  title: "",
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
      <div className="g-container">
        방명록
        <div>
          제목:
          <input
            className="g-title"
            name="title"
            type={"text"}
            value={guestBook.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          내용:
          <textarea
            className="g-content"
            name="content"
            type={"text"}
            value={guestBook.content}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          작성자:
          <input
            name="writer"
            type={"text"}
            value={guestBook.writer}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button type="button" onClick={handleClickAdd}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
