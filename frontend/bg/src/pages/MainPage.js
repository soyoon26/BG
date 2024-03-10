import Logo from "../components/Button/Logo";
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
