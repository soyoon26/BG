//카드 맞추기 ,
import React, { useEffect, useState, useRef, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import back from "../../images/back_ivory.png";
import "./GuessCard.css";
const GuessCard = ({ nextCard, level, usedPicture, usedNumber }) => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };
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
  const shuffleIdx = useMemo(() => shuffle(idx), []);

  let order = 0;

  let no = shuffleIdx[order]; //문제의 순서
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
  }, order);
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  let lastOpt = numberCards.filter((card) => card != answer);
  console.log("정답아닌", lastOpt);

  const shuffleLastOpt = useMemo(() => shuffle(lastOpt).slice(0, 5), [order]);
  console.log("셔플드라스트", order);
  //let shuffleLastOpt = shuffle(lastOpt).slice(0, 5);
  shuffleLastOpt.push(answer);
  console.log(answer);
  console.log("섞기 전", shuffleLastOpt);
  const sixOpt = useMemo(() => shuffle(shuffleLastOpt), []);

  const click = useMemo(() => sixOpt.indexOf(answer), []);

  console.log("6개의 보기", sixOpt, click);

  const fetchAllUrls = async (pictureArray) => {
    const urlArray = [];
    for (const picture of pictureArray) {
      const imageUrl = await getOne(`${picture}.png`);
      urlArray.push(imageUrl);
    }
    console.log(urlArray);
    return urlArray;
  };
  const [optUrl, setOptUrl] = useState([]);
  const [clickCard, setClickCard] = useState();
  const clickAns = "";
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const urls = await fetchAllUrls(sixOpt);
        console.log(urls, "선택지링크 이거 나와야 해", answer);
        setOptUrl(urls);
        setClickCard(click);
        clickAns = optUrl[click];
        console.log("왜 다른게??", sixOpt, optUrl, click, clickAns);
        console.log("제발요이거야해", clickCard);
      } catch (error) {
        console.error("Error occurred while fetching URLs:", error);
      }
    };
    console.log("마지막 선택지", sixOpt, optUrl);
    fetchUrls();
  }, []);

  console.log("마지막 선택지 dho", question, answer, sixOpt, optUrl);
  const final = optUrl;

  const handleClick = (selectedCard) => {
    if (selectedCard === optUrl[click]) {
      alert("정답입니다!");
      order += 1;
      no = shuffleIdx[order];
      answer = usedNumber[no];
      console.log(answer, no, order);
    } else {
      alert("틀렸습니다.");
    }
  };
  return (
    <div style={backStyles}>
      <div className="step-info">
        {level}단계 게임 / {order.current + 1}번째 문제: 어떤 카드와
        짝이었을까요? <StopMenu />
      </div>
      <div className="card-container">
        <div>
          <img className="match-card" src={question} alt="문제카드" />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default GuessCard;
