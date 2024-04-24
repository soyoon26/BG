import { useState, useEffect } from "react";
import { getList } from "../../api/guestBookApi";
import useCustomMove from "../../hooks/useCustomMove";
import Page from "./Page";

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
      console.log(data);
      setServerData(data);
    });
  }, [page, size]);
  return (
    <div>
      <div>
        {serverData.dtoList.map((guestbook) => (
          <div
            key={guestbook.no}
            className="w-full min-w-[400px] p-2 m-2 rounded shadow-md"
          >
            <div className="flex">
              <div className="font-extrabold text-2xl p-2 w-1/12">
                {guestbook.no}
              </div>
              <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
                {guestbook.content}
              </div>
              <div className="text-1xl m-1 p-2 w-2/10">{guestbook.writer}</div>
              <div className="text-1xl m-1 p-2 w-2/10">{guestbook.date}</div>
            </div>
          </div>
        ))}
        <Page serverData={serverData} movePage={moveToList}></Page>
      </div>
    </div>
  );
};

export default List;
