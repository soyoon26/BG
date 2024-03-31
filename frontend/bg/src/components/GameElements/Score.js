import React, { useEffect, useState, useRef } from "react";
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
  return (
    <div className="parent-container" style={backStyles}>
      <div className="circle">
        <div className="score-container">
          당신의 점수는
          <br />
          <div className="container">
            <div className="score-text">{score}점</div>
            입니다.
            <br />
          </div>
        </div>
        <div className="select-container">
          <SelectMenu />
        </div>
      </div>
    </div>
  );
};

export default Score;
