import { Outlet, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import background from "../../images/back_gb.png";
import MenuBar from "../../components/Common/MenuBar";
const IndexPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div>
      <MenuBar />
      <Outlet />
    </div>
  );
};

export default IndexPage;
