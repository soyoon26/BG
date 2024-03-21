//게임 도중에만 나타나기
import { Link } from "react-router-dom";

const StopMenu = () => {
  return (
    <div className=" flex justify-end p-3 font-large mt-1">
      <Link to={"../select"}>
        <button className="bg-red-500 text-white p-3 mt-0 rounded-lg">
          그만두기
        </button>
      </Link>
    </div>
  );
};

export default StopMenu;
