import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./ReverseNumber.css";

const ReverseNumber = ({ nextCard, level, usedNumber }) => {
  const questionCnt = level === 1 ? 4 : level === 2 ? 7 : 9; //스텝에 따른 문제수
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  const [final, setFinal] = useState([]);
  const order = useRef(0);
  const fetchAllUrls = async (numberArray) => {
    const urlArray = [];
    for (const number of numberArray) {
      const imageUrl = await getOne(`${number}.png`);
      urlArray.push(imageUrl);
    }
    console.log(urlArray);
    return urlArray;
  };
  useEffect(() => {
    const fetchFinal = async () => {
      const urls = await fetchAllUrls(numberCards);
      console.log(final);
      setFinal(urls);
    };

    fetchFinal();
  }, []); // useEffect가 최초로 실행될 때만 실행되도록 빈 종속성 배열을 전달합니다.

  return (
    <div>
      <div className="step-info">
        {level}단계 게임 / {order.current + 1}번째 문제 <StopMenu />
      </div>
      <div className="card-container">
        <div className="choices">
          {final.slice(0, 5).map((card, index) => (
            <img
              key={index}
              className="choice-cards"
              src={card}
              alt="선택지 카드"
              //onClick={() => handleClick(card)}
            />
          ))}
        </div>
        <div className="choices">
          {final.slice(5, 10).map((card, index) => (
            <img
              key={index}
              className="choice-cards"
              src={card}
              alt="선택지 카드"
              //onClick={() => handleClick(card)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ReverseNumber;
