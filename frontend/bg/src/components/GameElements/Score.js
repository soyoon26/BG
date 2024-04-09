import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import back from "../../images/back_check.png";
import SelectMenu from "../Button/SelectMenu";

import "./Score.css";

const Score = ({ level, score }) => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
    margin: 0,
  };
  console.log(score, "점수확인");
  const finalScore = score < 0 ? 0 : score;
  return (
    <div className="parent-container" style={backStyles}>
      <div className="circle">
        <div className="score-container-s">
          당신의 점수는
          <br />
          <div className="container">
            <div className="score-text">{finalScore}점</div>
            입니다.
            <br />
          </div>
        </div>
        <div className="select-container-s">
          {/* <SelectMenu /> */}
          <div className="btns flex justify-end p-5 font-large">
            <Link to={"../about"}>
              <button className="font3 bg-green-900 text-white p-3 mt-1 ml-3 rounded-lg">
                사이트 정보
              </button>
            </Link>
            <Link to={"../select"}>
              <button className="font3 bg-green-900 text-white p-3 mt-1 ml-3 rounded-lg">
                게임 선택 화면으로 돌아가기
              </button>
            </Link>
            <Link to={"../map"}>
              <button className="font3 bg-green-900 text-white p-3 mt-1 ml-3 rounded-lg">
                병원 지도찾기🏥
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
