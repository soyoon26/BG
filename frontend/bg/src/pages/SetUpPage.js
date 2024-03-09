//게임 단계 설정
import setup_back from "../images/setup_background.png";
import { Link, useLocation } from "react-router-dom";
import SelectMenu from "../components/menus/SelectMenu";
import "./SetUpPage.css";
const SetUpPage = () => {
  const backStyles = {
    backgroundImage: `url(${setup_back})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  const location = useLocation(); //Url정보 할당
  const searchParams = new URLSearchParams(location.search); //쿼리 문자열 추출
  const gameType = searchParams.get("type"); //gameType 가져오기

  const nextPath = gameType === "card" ? "/card" : "/number";

  return (
    <div style={backStyles}>
      <div className=" flex justify-end p-5 font-large">
        <SelectMenu className="p-5"></SelectMenu>
      </div>
      <div className="select-txt font3-sub mt-1">단계를 선택해주세요!</div>
      <div className="step">
        <div className="step-container">
          <Link to={{ pathname: nextPath, search: "?step=1" }}>
            <div className="select-txt font3-step mt-1">1단계</div>
            <div className="description">"처음이라면 선택 ! 가장 쉬워요."</div>
          </Link>
        </div>
        <div className="step-container">
          <Link to={{ pathname: nextPath, search: "?step=2" }}>
            <div className="select-txt font3-step mt-1">2단계</div>
            <div className="description">
              "1단계를 잘 통과하였다면 2단계로~"
            </div>
          </Link>
        </div>
        <div className="step-container">
          <Link to={{ pathname: nextPath, search: "?step=3" }}>
            <div className="select-txt font3-step mt-1">3단계</div>
            <div className="description">"게임에 자신이 있다면 도전 !"</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SetUpPage;
