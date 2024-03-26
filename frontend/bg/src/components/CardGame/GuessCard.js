//카드 맞추기 ,
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./GuessCard.css";
const GuessCard = ({ nextCard, level, usedPicture, usedNumber }) => {
  const questionCnt = level === 1 ? 4 : level === 2 ? 7 : 9; //스텝에 따른 문제수
  const idx = Array.from({ length: questionCnt }, (_, index) => index);
  const [question, questionSet] = useState();

  //shuffle - Fisher-Yates 알고리즘
  function shuffle(array) {
    const shuffledArray = [...array]; // 원본 배열을 복사하여 새로운 배열 생성
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); //
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }
  const shuffleIdx = shuffle(idx);
  console.log(shuffleIdx, "셔플된 인덱스");
  const order = useRef(0);
  let no = shuffleIdx[order.current]; //문제의 순서
  console.log(no, shuffleIdx[order.current], "문제순서");
  let answer = usedNumber[no];
  console.log("정담", answer, usedPicture[no]);
  // 만약 이번에 가져와야 할 인덱스
  const fetchQ = async () => {
    console.log(usedPicture[no], no, usedPicture, "문제카드");
    const imageUrl = await getOne(`${usedPicture[no]}.png`);
    questionSet(imageUrl);
  };
  useEffect(() => {
    fetchQ();
    console.log(question);
  }, [no]);
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  let lastOpt = numberCards.filter((card) => card != answer);
  console.log("정답아닌", lastOpt);

  let shuffleLastOpt = shuffle(lastOpt).slice(0, 5);
  shuffleLastOpt.push(answer);
  console.log("섞기 전", shuffleLastOpt);
  let sixOpt = shuffle(shuffleLastOpt);

  console.log("6개의 보기", sixOpt);

  return (
    <div>
      <div className="step-info">
        {level}단계 게임 / {order.current + 1}번째 문제 <StopMenu />
      </div>
      <div className="card-container">
        <div>
          <img className="match-card" src={question} alt="문제카드" />
        </div>
        <div>
          <div className="choices">
            {/* {sixUrls.slice(0, 3).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="선택지 카드"
                onClick={() => handleCardClick(card)}
              />
            ))} */}
          </div>
          <div className="choices">
            {/* {sixUrls.slice(3, 6).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="선택지 카드"
                onClick={() => handleCardClick(card)}
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuessCard;
