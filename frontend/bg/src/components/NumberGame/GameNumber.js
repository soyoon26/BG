import React, { useEffect, useState, useRef } from "react";
import back from "../../images/back_ivory.png";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./GameNumber.css";

const GameNumber = ({ nextCard, level }) => {
  const [numberCard, setNumberCard] = useState(null);
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  const [usedNumberCards, setUsedNumberCards] = useState([]);
  const cnt = useRef(0);
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };

  useEffect(() => {
    const fetchNumberCard = async () => {
      //숫자카드 가져오기
      try {
        let randomNumberCard;
        do {
          randomNumberCard =
            numberCards[Math.floor(Math.random() * numberCards.length)];
        } while (usedNumberCards.includes(randomNumberCard));

        setUsedNumberCards((prevUsedNumberCards) => [
          ...prevUsedNumberCards,
          randomNumberCard,
        ]);

        const imageUrl = await getOne(`${randomNumberCard}.png`);
        console.log(imageUrl, "숫자카드");
        setNumberCard(imageUrl);
      } catch (error) {
        console.error("Error fetching number card data:", error);
      }
    };

    let cardCnt = 4;
    if (level === 2) cardCnt = 7;
    else if (level === 3) cardCnt = 9; //문제수

    if (cnt.current < cardCnt) {
      const intervalId = setInterval(() => {
        fetchNumberCard();
        cnt.current++;
        console.log(cnt.current);
      }, 3000);
      return () => clearInterval(intervalId);
    } else {
      setTimeout(() => {
        const UsedNumber = [...usedNumberCards]; // 배열을 복사하여 캡처
        console.log(UsedNumber, "왜 안 넘어가지");
        nextCard("reverse", level, UsedNumber);
      }, 3000);
    }
  }, [usedNumberCards]);
  return (
    <div style={backStyles}>
      <div className="step-info">
        {level}단계 게임 <StopMenu />
      </div>
      <div className="card-container-g">
        {numberCard && (
          <img className="match-card-n" src={numberCard} alt="숫자카드" />
        )}
      </div>
    </div>
  );
};

export default GameNumber;
