//about화면에서 나타나기
import { Link } from "react-router-dom";
import "../../App.css";
const SelectMenu = () => {
  return (
    <div className=" flex justify-end p-5 font-large">
      <Link to={"../select"}>
        <button className="font3 bg-red-400 text-white p-3 mt-3 rounded-lg">
          게임 선택화면으로
          <br />
          돌아가기
        </button>
      </Link>
    </div>
  );
};

export default SelectMenu;
