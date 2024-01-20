//게임 단계 설정
// import setup_back from "../images/setup_background.png";
import { Link } from "react-router-dom";
const SetUpPage = () => {
  const backStyles = {
    backgroundImage: 'url("../images/setup_background.png")',
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <div className="flex">
        <Link to="../about">About 임시</Link>
      </div>
    </div>
  );
};

export default SetUpPage;
