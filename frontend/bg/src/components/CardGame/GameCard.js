import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import back from "../../images/back_ivory.png";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./GameCard.css";

const GameCard = ({ nextCard, level }) => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = parseInt(searchParams.get(level)); //정수로 바꿔줌
  const [pictureCard, setPictureCard] = useState(null);
  const [numberCard, setNumberCard] = useState(null);
  const [usedPictureCards, setUsedPictureCards] = useState([]); //사용된 그림 카드 배열
  const [usedNumberCards, setUsedNumberCards] = useState([]); //사용된 숫자 카드 배열
  const cnt = useRef(0);

  const pictureCards = [
    "가방",
    "강아지",
    "기타",
    "꽃",
    "연필",
    "우산",
    "주전자",
    "지구",
    "티켓",
    "편지",
    "폰",
    "풍선",
    "나무",
    "나비",
    "노트북",
    "비누",
    "사과",
    "사탕",
    "시계",
    "책",
    "카메라",
    "커피",
    "케익",
    "쿠키",
    "쿼카",
    "크레용",
    "토끼",
  ]; //사용하지 않은 그림카드 배열
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString()); //사용하지 않은 숫자카드 배열

  useEffect(() => {
    const fetchPictureCard = async () => {
      //그림카드 비동기로 가져오기
      try {
        let randomPictureCard;
        do {
          //do-while 실행 뒤 조건 검사
          randomPictureCard =
            pictureCards[Math.floor(Math.random() * pictureCards.length)];
        } while (usedPictureCards.includes(randomPictureCard));
        //랜덤그림카드 구하기
        setUsedPictureCards((prevUsedPictureCards) => [
          ...prevUsedPictureCards,
          randomPictureCard,
        ]);
        //사용한 그림카드에 넣기, 불변성을 위해
        const imageUrl = await getOne(`${randomPictureCard}.png`);
        console.log(imageUrl, "그림카드");
        setPictureCard(imageUrl);
      } catch (error) {
        console.error("Error fetching picture card data:", error);
      }
    };

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
    if (level === 2) cardCnt = 6;
    else if (level === 3) cardCnt = 9; //문제수

    if (cnt.current < cardCnt) {
      const intervalId = setInterval(() => {
        fetchPictureCard();
        fetchNumberCard();
        cnt.current++;
        console.log(cnt.current);
      }, 3000);
      return () => clearInterval(intervalId);
    } else {
      setTimeout(() => {
        const UsedNumber = [...usedNumberCards]; // 배열을 복사하여 캡처
        const UsedPicture = [...usedPictureCards];
        nextCard("guess", level, UsedPicture, UsedNumber);
      }, 3000);
    }
  }, [usedPictureCards, usedNumberCards]);

  return (
    <div style={backStyles}>
      <div className="step-info">
        {level}단계 게임 <StopMenu />
      </div>
      <div className="card-container">
        {pictureCard && (
          <img className="match-card" src={pictureCard} alt="그림카드" />
        )}
        {numberCard && (
          <img className="match-card" src={numberCard} alt="숫자카드" />
        )}
      </div>
    </div>
  );
};

export default GameCard;
