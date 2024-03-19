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
    <div className="howto-container">
      {gameType === "card" && (
        <div className="card-howto font3 text-3xl text-center">
          {/* 카드게임 */}
          <br />
          먼저 카드가 짝을 지어 나옵니다.
          <br />
          다 보여진 다음,
          <br />
          화면에 나타나는 한 카드가 어떤 카드와 짝이었는지
          <br />
          맞춰주시면 됩니다.
          <br />
        </div>
      )}
      {gameType === "number" && (
        <div className="number-howto font3 text-3xl text-center">
          <br />
          나타나는 카드의 순서를 외워주세요.
          <br />
          다 보여진 다음,
          <br />
          카드가 나왔던 순서를 거꾸로 선택해주세요.
          <br />
        </div>
      )}
      <div className="start-container">
        <StartButton gameType={gameType} step={step} />
      </div>
    </div>
  );
};
export default HowToPage;
