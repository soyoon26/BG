//카드 맞추기 ,
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../api/cardApi";
import StopMenu from "../components/Button/StopMenu";
import "./GuessCardPage.css";
const GuessCardPage = () => {
  const location = useLocation();
  const { step, usedNumberCards, usedPictureCards } = location.state;
  const [card, setCard] = useState(null);
  const [answer, setAnswer] = useState(null);

  const pickCnt = step === 1 ? 4 : step === 2 ? 7 : 9; //스텝에 따른 문제수
  const pickCards = [usedPictureCards, usedNumberCards];
  const [choice, setChoice] = useState(null);
  const [score, setScore] = useState([]);
  const order = useRef(0);
  const pickIndex = Math.floor(Math.random() * pickCards.length); //랜덤으로 문제카드 구하기
  const otherIndex = pickIndex === 0 ? 1 : 0; //짝지 카드
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
  ].filter((card) => card != pickCards[otherIndex][order.current]); //정답을 뺀 그림카드 전체 배열
  const numberCards = Array.from({ length: 10 }, (_, i) =>
    (i + 1).toString()
  ).filter((card) => card != pickCards[otherIndex][order.current]); //정답을 뺀 숫자카드 전체 배열
  const choicePictureCards = pictureCards.filter((card) => card != answer);
  const choiceNumberCards = numberCards.filter((card) => card != answer); //선택지에 갈 카드들, 정답 제외
  const otherChoice = pickIndex === 0 ? choiceNumberCards : choicePictureCards;
  useEffect(() => {
    const fetchCard = async () => {
      const imageUrl = await getOne(
        `${pickCards[pickIndex][order.current]}.png` //문제카드
      );
      setCard(imageUrl);
    };
    fetchCard();
  }, [usedNumberCards, usedPictureCards]);

  useEffect(() => {
    const fetchAnswer = async () => {
      const imageUrl = await getOne(
        `${pickCards[otherIndex][order.current]}.png` //정답카드
      );
      setAnswer(imageUrl);
      console.log(
        `${pickCards[otherIndex][order.current]}.png`,
        "찐정답이에용"
      );
    };
    fetchAnswer();
  }, [usedNumberCards, usedPictureCards]);

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }; //Fisher-Yates 알고리즘
  console.log(otherChoice, "선택지에 갈거임");
  const shuffledCards = shuffle([answer, ...otherChoice]);
  console.log(shuffledCards);
  return (
    <div>
      <div className="step-info">
        {step}단계 게임 <StopMenu />
      </div>
      <div className="card-container">
        <div>
          <img className="match-card" src={card} alt="그림카드" />
        </div>
        <div>
          <div className="choices">
            {shuffledCards.slice(0, 3).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="그림카드"
              />
            ))}
          </div>
          <div className="choices">
            {shuffledCards.slice(3, 6).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="그림카드"
              />
            ))}
          </div>

          {/* <div className="choices">
            <img className="choice-cards" src={answer} alt="그림카드" />
            <img className="choice-cards" src={card} alt="그림카드" />
            <img className="choice-cards" src={card} alt="그림카드" />
          </div>
          <div className="choices">
            <img className="choice-cards" src={card} alt="그림카드" />
            <img className="choice-cards" src={card} alt="그림카드" />
            <img className="choice-cards" src={card} alt="그림카드" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default GuessCardPage;
