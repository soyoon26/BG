import "../../App.css";
import "./StartButton.css";
const StartButton = ({}) => {
  return (
    <div className=" flex justify-center font-large">
      {/* 게임타입에 따라 search로 step을 가지고 가기  */}
      <button className="start font3 bg-red-500 text-white p-3 mt-3 rounded-lg">
        게임 시작 !
      </button>
    </div>
  );
};

export default StartButton;
