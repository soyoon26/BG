import React, { useEffect, useState, useRef } from "react";
import "./Score.css";

const Score = ({ level, score }) => {
  return (
    <div>
      <div className="circle">
        <div className="score-container">
          당신의 점수는
          <br />
          {score}점입니다.
        </div>
      </div>
    </div>
  );
};

export default Score;
