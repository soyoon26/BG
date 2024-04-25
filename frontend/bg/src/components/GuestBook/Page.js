import "./Page.css";
const Page = ({ serverData, movePage }) => {
  console.log(serverData);
  return (
    <div className="page">
      {serverData.current != 1 ? (
        <div onClick={() => movePage({ page: serverData.current - 1 })}>
          이전 페이지 &lt;
        </div>
      ) : (
        <></>
      )}
      {serverData.pageNumList.map((pageNum) => (
        <div
          key={pageNum}
          className={`m-2 rounded ${
            serverData.current === pageNum ? "bg-yellow-500" : "bg-red-300"
          }`}
          onClick={() => movePage({ page: pageNum })}
          style={{
            textDecoration: "underline",
            width: "50px",
            textAlign: "center",
          }}
        >
          {pageNum}
        </div>
      ))}
      {serverData.current < serverData.totalPage ? (
        <div onClick={() => movePage({ page: serverData.current + 1 })}>
          &gt; 다음 페이지
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Page;
