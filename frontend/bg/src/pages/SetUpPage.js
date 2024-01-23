//게임 단계 설정
import setup_back from "../images/setup_background.png";
import { Link } from "react-router-dom";
import SelectMenu from "../components/menus/SelectMenu";

const SetUpPage = () => {
  const backStyles = {
    backgroundImage: `url(${setup_back})`,
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
          /
        </Link>
        <SelectMenu className="p-5"></SelectMenu>
      </div>
      <div className="flex">
        <Link to="../about">About 임시</Link>
        <div className="select-txt font3-sub mt-1">단계를 선택해주세요!</div>
      </div>
    </div>
  );
};

export default SetUpPage;
