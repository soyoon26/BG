// import BasicLayout from "../layouts/BasicLayout";
// import BasicMenu from "../components/menus/BasicMenu";
import Logo from "../components/menus/Logo";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      {/* <BasicMenu></BasicMenu> */}
      <Link to={"./select"}>
        <Logo></Logo>
      </Link>
    </div>
  );
};

export default MainPage;
