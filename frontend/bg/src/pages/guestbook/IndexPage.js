import { Outlet, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import background from "../../images/back_gb.png";

const IndexPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
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
