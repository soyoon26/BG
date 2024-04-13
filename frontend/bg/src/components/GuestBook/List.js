import { useState, useEffect } from "react";
import { getList } from "../../api/guestBookApi";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

const List = () => {
  const [serverData, setServerData] = useState(initState);
  return <div>guestbook list</div>;
};

export default List;
