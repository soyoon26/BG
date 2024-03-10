//about화면에서 나타나기
import { Link } from "react-router-dom";
import "../../App.css";
const StartButton = () => {
  return (
    <div className=" flex justify-center p-5 font-large">
      <Link to={"../select"}>
        <button className="font3 bg-red-400 text-white p-3 mt-3 rounded-lg">
          게임 시작
        </button>
      </Link>
    </div>
  );
};

export default StartButton;
