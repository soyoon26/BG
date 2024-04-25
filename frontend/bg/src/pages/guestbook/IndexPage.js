import { Outlet, useNavigate } from "react-router-dom";
import { useCallback } from "react";

const IndexPage = () => {
  const navigate = useNavigate();
  const handleClickList = useCallback(() => {
    navigate({ pathname: "list" });
  });
  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "add" });
  });
  const handleClickRead = useCallback(() => {
    navigate({ pathname: "read" });
  });
  return (
    <div>
      {/* <div onClick={handleClickList}> List</div>
      <div onClick={handleClickAdd}> Add</div>
      <div onClick={handleClickRead}> Read</div> */}
      <Outlet />
    </div>
  );
};

export default IndexPage;
