import Logo from "../components/Button/Logo";
import { Link } from "react-router-dom";
import background from "../images/back_check.png";
const MainPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      {/* <BasicMenu></BasicMenu> */}
      <Link to={"./select"}>
        <Logo></Logo>
      </Link>
    </div>
  );
};

export default MainPage;
