import { Link } from "react-router-dom";
import background from "../images/setup_background.png";

const SelectPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <div style={backStyles}>
      <div className="flex">
        <Link to={"../about"}>About</Link>
        {/* 클릭시 추가적 로딩 */}
      </div>
      {/* <img src={background} alt="설정배경" /> */}
      <div className="text-3xl">게임 선택하기 화면 </div>
    </div>
  );
};

export default SelectPage;
