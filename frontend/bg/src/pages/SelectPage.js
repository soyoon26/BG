import { Link } from "react-router-dom";
import background from "../images/setup_background.png";
import "./SelectPage.css";
import "../App.css";
import card from "../images/짝맞추기.png";
import phone from "../images/번호외우기.png";
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
      <div className="select-txt font3 text-8xl mt-20">
        게임을 선택해주세요!
      </div>
      <div className="flex">
        <img src={phone} alt="번호외우기" className="image" />
        <img src={card} alt="카드 짝 맞추기" className="image" />
      </div>
    </div>
  );
};

export default SelectPage;
