import { useRef, useState } from "react";

const initState = {
  gcontent: "",
  gwriter: "",
  date: null,
};

const Add = () => {
  const [guestBook, setGuestBook] = useState([...initState]);
  const uploadRef = useRef();
  const handleChange = (e) => {
    // guestBook[e.target.]/
  };
};
