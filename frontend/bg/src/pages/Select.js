import { Link } from "react-router-dom";
import background from "../images/setup_background.png";
import "./Select.css";
import "../App.css";
import card from "../images/짝맞추기.png";
import phone from "../images/번호외우기.png";
const Select = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <div className=" flex justify-end p-5 font-large">
        <Link to={"../about"}>
          <button className="font3 bg-red-400 text-white p-3 mt-1 rounded-lg">
            About
          </button>
        </Link>
      </div>
      {/* 클릭시 추가적 로딩 */}
      <div className="select-txt font3-sub mt-1">게임을 선택해주세요!</div>
      <div className="image-container">
        <div className="game-option text-4xl">
          <Link to={{ pathname: "../game/card" }}>
            <img
              src={card}
              alt="카드 짝 맞추기"
              className="image"
              style={{ cursor: "pointer" }}
            />
            <div className="font4">카드 짝 맞추기</div>
          </Link>
        </div>
        <div className="game-option">
          <Link to={{ pathname: "../game/number" }}>
            <img
              src={phone}
              alt="번호외우기"
              className="image"
              style={{ cursor: "pointer" }}
            />
          </Link>
          <div className="font4">번호 거꾸로 외우기</div>
        </div>
      </div>
    </div>
  );
};

export default Select;
