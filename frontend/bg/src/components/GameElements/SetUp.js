//게임 단계 설정
import setup_back from "../../images/back_circle.png";
import SelectMenu from "../Button/SelectMenu";
import "./SetUp.css";
const SetUp = ({ next }) => {
  const backStyles = {
    backgroundImage: `url(${setup_back})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  return (
    <div style={backStyles}>
      <div className=" flex justify-end p-5 font-large">
        <SelectMenu className="p-5"></SelectMenu>
      </div>
      <div className="select-txt font3-sub mt-1">단계를 선택해주세요!</div>
      <div className="step">
        <div
          className="step-container"
          onClick={() => next("howTo", 1)}
          style={{ cursor: "pointer" }}
        >
          <div className="select-txt font3-step mt-1">1단계</div>
          <div className="description">"처음이라면 선택 ! 가장 쉬워요."</div>
        </div>
        <div
          className="step-container"
          onClick={() => next("howTo", 2)}
          style={{ cursor: "pointer" }}
        >
          <div className="select-txt font3-step mt-1">2단계</div>
          <div className="description">"1단계를 잘 통과하였다면 2단계로~"</div>
        </div>
        <div
          className="step-container"
          onClick={() => next("howTo", 3)}
          style={{ cursor: "pointer" }}
        >
          <div className="select-txt font3-step mt-1">3단계</div>
          <div className="description">"게임에 자신이 있다면 도전 !"</div>
        </div>
      </div>
    </div>
  );
};

export default SetUp;
