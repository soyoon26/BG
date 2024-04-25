const Page = ({ serverData, movePage }) => {
  return (
    <div>
      {serverData.prev && (
        <div onClick={() => movePage({ page: serverData.prevPage })}>Prev </div>
      )}
      {serverData.pageNumList.map((pageNum) => (
        <div
          key={pageNum}
          className={`m-2 ${
            serverData.current === pageNum ? "bg-gray-500" : "bg-red-300"
          }`}
          onClick={() => movePage({ page: pageNum })}
        >
          {pageNum}
        </div>
      ))}
      {serverData.next && (
        <div onClick={() => movePage({ page: serverData.nextPage })}>Next </div>
      )}
    </div>
  );
};

export default Page;
