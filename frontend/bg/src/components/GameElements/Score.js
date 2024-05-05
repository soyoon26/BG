import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import back from "../../images/back_check.png";
import MenuBar from "../Common/MenuBar";

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
    <div className="menu-container">
      <MenuBar />
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
            <div className="btns flex justify-end p-5 font-large">
              <Link to={"../select"}>
                <button className="font3 text-2xl bg-green-900 text-white p-4 mt-3  rounded-lg">
                  다시 게임하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
