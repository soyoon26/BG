import StartButton from "../components/Button/StartButton";
import { Link, useLocation } from "react-router-dom";
import "./HowToPage.css";

const HowToPage = () => {
  //const nextPath = gameType === "card" ? "/game/card" : "/game/number";
  const location = useLocation(); //Url정보 할당
  const searchParams = new URLSearchParams(location.search); //쿼리 문자열 추출
  const gameType = searchParams.get("type"); //gameType 가져오기
  const step = searchParams.get("step");

  return (
    <div className="start-container">
      <StartButton />
    </div>
  );
};
export default HowToPage;
