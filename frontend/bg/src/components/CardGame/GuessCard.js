//카드 맞추기 ,
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../../api/cardApi";
import StopMenu from "../Button/StopMenu";
import "./GuessCard.css";
const GuessCard = ({ nextCard, level, usedPicture, usedNumber }) => {
  console.log(level);
  console.log(usedPicture);
  console.log(usedNumber);

  const questionCnt = level === 1 ? 4 : level === 2 ? 7 : 9; //스텝에 따른 문제수
  const [question, setQuestion] = useState(); //문제로 나갈 카드
  const [answer, setAnswer] = useState(); //정답카드 url
  const pickCards = [usedPicture, usedNumber]; //랜덤으로 나갈 문제 카드종류
  const pickIndex = Math.floor(Math.random() * pickCards.length); //랜덤으로 문제카드 구하기
  const otherIndex = pickIndex === 0 ? 1 : 0; //짝지 카드
  const [score, setScore] = useState(0); //점수
  const order = useRef(0); //인덱스, 클릭하면 올라감
  const [answerName, setAnswerName] = useState(
    pickCards[otherIndex][order.current]
  ); //정답카드 이름
  console.log(answerName, "answerName");
  // const navigate = useNavigate(); //점수카드로 이동
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
  ]; //그림카드 전체 배열
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString()); //숫자카드 전체 배열
  const optionCard = pickIndex === 0 ? numberCards : pictureCards; //선택지로 나갈 카드
  const [options, setOptions] = useState([]);
  // const [choiceOthers, setChoiceOthers] = useState([]);
  // const [choiceUrls, setChoiceUrls] = useState([]);
  // const [check, setCheck] = useState(false);
  // const [checkNotIn, setCheckNotIn] = useState(false);
  const [shuffledOpt, setShuffledOpt] = useState([]);
  // const [finalCards, setFinalCards] = useState([]);
  // const [indexCard, setIndexCard] = useState([]);
  const index = Array.from({ length: questionCnt }, (_, index) => index + 1);

  //셔플 구현 - Fisher-Yates 알고리즘

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
      console.log(shuffledArray);
    }
    return shuffledArray;
  };
  const shuffleIdx = shuffle(index); //문제카드 순서
  let questionIdx = shuffleIdx[order.current]; //현재 문제의 idx
  //문제카드 url 변경
  const fetchCard = async () => {
    const questionName = pickCards[pickIndex][questionIdx];
    const imageUrl = await getOne(
      `${questionName}.png` //문제카드
    );
    setQuestion(imageUrl);
    console.log(questionName, "question");
  };
  useEffect(() => {
    fetchCard();
  }, []);

  //정답카드
  const fetchAnswer = async () => {
    const ans = pickCards[otherIndex][questionIdx]; //정답카드
    setAnswerName(ans);
    const imageUrl = await getOne(
      `${ans}.png` //문제카드
    );
    setAnswer(imageUrl);
  };
  useEffect(() => {
    fetchAnswer();
  }, []);

  //배열에서 정답 빼기
  const fetchLast = () => {
    const lastOpt = optionCard.filter((card) => card != answerName);
    return lastOpt;
  };
  useEffect(() => {
    setOptions(shuffle(fetchLast()));
  }, []);
  //console.log(options, "options");

  //선택지5개 url으로 변경
  const fetchUrls = async (array) => {
    const sixUrls = [];
    for (const card of array) {
      const url = await getOne(`${card}.png`);
      sixUrls.push(url);
    }
    return sixUrls;
  };

  const sixCards = shuffle([...[...options].slice(0, 5), answerName]);
  console.log(sixCards, "sixCards url아님");
  //6개 섞기
  const [sixUrls, setSixUrls] = useState([]);
  useEffect(async () => {
    // const urls = await fetchUrls(sixCards);
    // console.log("urls 넣어야해", urls);
    //   setSixUrls(urls);
  }, []);
  // console.log(sixUrls, "six urls");
  //클릭 후 새로운 문제 나타내기
  // for (let i = 0; i < length; i++) {
  //   result.push(currentValue);
  //   currentValue += 2;
  //   if (currentValue > length) {
  //     currentValue = length % 2 === 0 ? length - 1 : length - 2;
  //   }
  // }
  const handleCardClick = (clickedCard) => {
    if (clickedCard === answer) {
      alert("정답입니다!");
      setScore((prevScore) => prevScore + 1); // 정답 카운트 상태 업데이트
      order.current++; // 다음 문제를 위해 order 업데이트
      // if (order.current === pickCnt - 1) {
      //   setTimeout(() => {
      //     navigate("/game/score", {
      //       state: {
      //         step: step,
      //         score: score,
      //       },
      //     });
      //   }, 3000);
      // }
      // 다음 문제 카드 가져오기
      // fetchData();
    } else {
      alert("틀렸습니다! 다시 골라보세요");
    }
    // };
    // return (
    //   <div>
    //     <div className="step-info">
    //       {level}단계 게임 / {order.current + 1}번째 문제 <StopMenu />
    //     </div>
    //     <div className="card-container">
    //       <div>
    //         <img className="match-card" src={card} alt="그림카드" />
    //       </div>
    //       <div>
    //         <div className="choices">
    //           {finalCards.slice(0, 3).map((card, index) => (
    //             <img
    //               key={index}
    //               className="choice-cards"
    //               src={card}
    //               alt="선택지 카드"
    //               onClick={() => handleCardClick(card)}
    //             />
    //           ))}
    //         </div>
    //         <div className="choices">
    //           {finalCards.slice(3, 6).map((card, index) => (
    //             <img
    //               key={index}
    //               className="choice-cards"
    //               src={card}
    //               alt="선택지 카드"
    //               onClick={() => handleCardClick(card)}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //  );
  };
};
export default GuessCard;
