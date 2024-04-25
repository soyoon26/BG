import { useState, useEffect } from "react";
import { getList } from "../../api/guestBookApi";
import useCustomMove from "../../hooks/useCustomMove";
import Page from "./Page";
import "./List.css";
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
  const { page, size, moveToList } = useCustomMove();
  const [serverData, setServerData] = useState(initState);
  useEffect(() => {
    getList({ page, size }).then((data) => {
      console.log(data, "data 확인");
      setServerData(data);
    });
  }, [page, size]);
  return (
    <div className="l-container">
      <div>
        {serverData.dtoList.map((guestbook) => (
          <div
            key={guestbook.no}
            className="w-3/5 min-w-[1000px] p-2 m-2 rounded shadow-md"
          >
            <div className="flex">
              <div className=" text-2xl p-2 w-1/12">{guestbook.no}.</div>
              <div className="text-2xl m-1 p-2 w-7/12 font-extrabold">
                {guestbook.title}
              </div>
              <div className="text-xl m-1 p-2 w-2/12">{guestbook.writer}</div>
              <div className="text-xl m-1 p-2 w-2/10">{guestbook.date}</div>
            </div>
          </div>
        ))}
        <div className="page-container">
          <Page serverData={serverData} movePage={moveToList}></Page>
        </div>
      </div>
    </div>
  );
};

export default List;
