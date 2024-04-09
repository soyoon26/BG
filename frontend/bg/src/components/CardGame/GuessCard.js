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

  const [ansIdx, setAnsIdx] = useState();
  const questionCnt = level === 1 ? 4 : level === 2 ? 6 : 9; //스텝에 따른 문제수
  const questionKind = [usedPicture, usedNumber];
  const [questionCard, setQuestionCard] = useState();
  const [answerCard, setAnswerCard] = useState();
  const [order, setOrder] = useState(0);
  const score = useRef(100);
  const [opts, setOpts] = useState([]);
  const idx = Array.from({ length: questionCnt }, (_, index) => index);
  // const [question, setQuestion] = useState();
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
  ];
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString());
  const optKind = [pictureCards, numberCards];
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
  const shuffleIdx = useMemo(() => shuffle(idx), []); //메모제이션, 문제로 나갈 순서
  console.log(shuffleIdx, "shuffleIdx");

  useEffect(() => {
    const fetchQuestion = async (randomIndex) => {
      const selectedKind = questionKind[randomIndex];
      console.log(selectedKind[shuffleIdx[order]], "문제로 선택된 종류");
      const question = selectedKind[shuffleIdx[order]];
      const imageUrl = await getOne(`${question}.png`);
      console.log(imageUrl, "문제 링크");
      setQuestionCard(imageUrl);
      console.log(questionCard, "들어갈 문제 링크");
      //여기까지 문제

      const restIndex = randomIndex === 0 ? 1 : 0;
      const restKind = questionKind[restIndex]; //옵션
      console.log(restKind, "선택지");
      const answer = restKind[shuffleIdx[order]];
      console.log(answer, "정답으로 선택");
      setAnswerCard(answer);
      console.log(answerCard, "useState 정답카드");
      //여기까지 정답
      const optCard = optKind[restIndex];
      console.log(optCard, answer, "선택지가 될 종류");
      const options = optCard.filter((card) => card !== answer);
      console.log(options, "정답뺀 선택지", answer);
      //여기까지 선택지
      const shuffledOpt = shuffle(options);
      const fiveOpt = shuffledOpt.slice(0, 5);
      console.log(fiveOpt);
      // 다섯개 선택지로 줄이기
      const sixOpt = shuffle([...fiveOpt, answer]);
      console.log(sixOpt, "정답 포함 선택지");
      const answerIdx = sixOpt.indexOf(answer);
      console.log(answerIdx, "정답 인덱스");
      setAnsIdx(answerIdx);
      console.log(ansIdx);

      const sixImg = [];
      for (const element of sixOpt) {
        const imageUrl = await getOne(`${element}.png`);
        sixImg.push(imageUrl);
      }
      console.log(sixImg);
      setOpts(sixImg);
    };
    // 선택지 카드 넣기

    const final = async () => {
      const randomIndex = Math.floor(Math.random() * questionKind.length);
      console.log(randomIndex, "랜덤인덱스");
      await fetchQuestion(randomIndex);
    };
    final();
  }, [order]);
  const handleClick = (index) => {
    console.log(index);
    if (index == ansIdx) {
      alert("정답입니다!");
      setOrder(order + 1);
      console.log(order, "order");
      console.log(score.current);
      if (order == questionCnt - 1) {
        nextCard("score", level, usedPicture, score.current);
      }
    } else {
      alert("틀렸습니다. 다시 골라주세요!");
      score.current -= 5;
      console.log(ansIdx, index);
    }
  };
  console.log(ansIdx, "마지막 확인");

  return (
    <div style={backStyles}>
      <div className="step-info">
        {level}단계 게임 / {order + 1}번째 문제: 어떤 카드와 짝이었을까요?{" "}
        <StopMenu />
      </div>
      <div className="card-container">
        <div>
          <img className="match-card" src={questionCard} alt="문제카드" />
        </div>
        <div>
          <div className="choices">
            {opts.slice(0, 3).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="선택지 카드"
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <div className="choices">
            {opts.slice(3, 6).map((card, index) => (
              <img
                key={index}
                className="choice-cards"
                src={card}
                alt="선택지 카드"
                onClick={() => handleClick(index + 3)}
              />
            ))}
          </div>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default GuessCard;
