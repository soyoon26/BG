import StartButton from "../Button/StartButton";
import { useLocation } from "react-router-dom";
import "./HowTo.css";

const HowTo = ({ next, gameType, level }) => {
  const location = useLocation(); //Url정보 할당
  const searchParams = new URLSearchParams(location.search); //쿼리 문자열 추출

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
          <br />
          <div
            className="start-container"
            onClick={() => next("gameCard", level)}
          >
            <StartButton />
          </div>
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
          <br />
          <div
            className="start-container"
            onClick={() => next("gameNumber", level)}
          >
            <StartButton />
          </div>
        </div>
      )}
    </div>
  );
};
export default HowTo;
