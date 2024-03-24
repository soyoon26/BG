//about화면에서 나타나기
import { Link } from "react-router-dom";
import "../../App.css";
import "./StartButton.css";
const StartButton = ({ gameType, step }) => {
  const nextPath =
    gameType === "card"
      ? `/game/card?step=${step}`
      : `/game/number?step=${step}`;

  return (
    <div className=" flex justify-center p-5 font-large">
      {/* 게임타입에 따라 search로 step을 가지고 가기  */}
      {/* <Link to={nextPath}> */}
      <button className="start font3 bg-red-400 text-white p-3 mt-3 rounded-lg">
        게임 시작
      </button>
      {/* </Link> */}
    </div>
  );
};

export default StartButton;
