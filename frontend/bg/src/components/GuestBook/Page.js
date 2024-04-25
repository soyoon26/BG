import "./Page.css";
const Page = ({ serverData, movePage }) => {
  console.log(serverData);
  return (
    <div className="page">
      {serverData.current != 1 ? (
        <div onClick={() => movePage({ page: serverData.current - 1 })}>
          Prev{" "}
        </div>
      ) : (
        <></>
      )}
      {serverData.pageNumList.map((pageNum) => (
        <div
          key={pageNum}
          className={`m-2 ${
            serverData.current === pageNum ? "bg-yellow-500" : "bg-red-300"
          }`}
          onClick={() => movePage({ page: pageNum })}
        >
          {pageNum}
        </div>
      ))}
      {serverData.current < serverData.totalPage ? (
        <div onClick={() => movePage({ page: serverData.current + 1 })}>
          Next
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
