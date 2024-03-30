import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./ReverseNumber.css";

const ReverseNumber = ({ nextCard, level, usedNumber }) => {
  const questionCnt = level === 1 ? 4 : level === 2 ? 7 : 9; //스텝에 따른 문제수
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  return (
    <div>
      <div className="step-info">
        {level}단계 게임 / {order.current + 1}번째 문제 <StopMenu />
      </div>
      <div className="choices">
        {final.slice(0, 3).map((card, index) => (
          <img
            key={index}
            className="choice-cards"
            src={card}
            alt="선택지 카드"
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
      <div className="choices">
        {final.slice(3, 6).map((card, index) => (
          <img
            key={index}
            className="choice-cards"
            src={card}
            alt="선택지 카드"
            onClick={() => handleClick(card)}
          />
        ))}
      </div>
    </div>
  );
};
