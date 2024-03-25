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
  // const location = useLocation();
  // // const { step, usedNumberCards, usedPictureCards } = location.state;
  // const pickCnt = level === 1 ? 4 : level === 2 ? 7 : 9; //스텝에 따른 문제수
  // const [card, setCard] = useState(null); //문제로 나갈 카드
  // const [answer, setAnswer] = useState(); //정답카드 url
  // const pickCards = [nextUsedPicture, nextUsedNumber]; //랜덤으로 나갈 문제 카드종류
  // const pickIndex = Math.floor(Math.random() * pickCards.length); //랜덤으로 문제카드 구하기
  // const otherIndex = pickIndex === 0 ? 1 : 0; //짝지 카드
  // const [score, setScore] = useState(0); //점수
  // const order = useRef(0); //인덱스, 클릭하면 올라감
  // const [answerName, setAnswerName] = useState(
  //   pickCards[otherIndex][order.current]
  // ); //정답카드 이름
  // const navigate = useNavigate(); //점수카드로 이동
  // const pictureCards = [
  //   "가방",
  //   "강아지",
  //   "기타",
  //   "꽃",
  //   "연필",
  //   "우산",
  //   "주전자",
  //   "지구",
  //   "티켓",
  //   "편지",
  //   "폰",
  //   "풍선",
  //   "나무",
  //   "나비",
  //   "노트북",
  //   "비누",
  //   "사과",
  //   "사탕",
  //   "시계",
  //   "책",
  //   "카메라",
  //   "커피",
  //   "케익",
  //   "쿠키",
  //   "쿼카",
  //   "크레용",
  //   "토끼",
  // ]; //그림카드 전체 배열
  // const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString()); //숫자카드 전체 배열
  // const otherChoice = pickIndex === 0 ? numberCards : pictureCards; //선택지로 나갈 카드
  // const [choiceOthers, setChoiceOthers] = useState([]);
  // const [choiceUrls, setChoiceUrls] = useState([]);
  // const [handle, setHandle] = useState(true); //핸들을 누르면 변함
  // const [check, setCheck] = useState(false);
  // const [checkNotIn, setCheckNotIn] = useState(false);
  // const [shuffledCards, setShuffledCards] = useState([]);
  // const [finalCards, setFinalCards] = useState([]);
  // const [indexCard, setIndexCard] = useState([]);
  // //문제카드 url 변경
  // const fetchCard = async () => {
  //   const imageUrl = await getOne(
  //     `${pickCards[pickIndex][order.current]}.png` //문제카드
  //   );
  //   setCard(imageUrl);
  // };
  // useEffect(() => {
  //   // const fetchCard = async () => {
  //   //   const imageUrl = await getOne(
  //   //     `${pickCards[pickIndex][order.current]}.png` //문제카드
  //   //   );
  //   //   setCard(imageUrl);
  //   // };
  //   fetchCard();
  // }, []);
  // //정답카드
  // const fetchAnswer = async () => {
  //   const ans = pickCards[otherIndex][order.current];
  //   setAnswerName(ans);
  //   const imageUrl = await getOne(
  //     `${pickCards[otherIndex][order.current]}.png` //문제카드
  //   );
  //   setAnswer(imageUrl);
  // };
  // useEffect(() => {
  //   // const fetchAnswer = async () => {
  //   //   const ans = pickCards[otherIndex][order.current];
  //   //   setAnswerName(ans);
  //   //   const imageUrl = await getOne(
  //   //     `${pickCards[otherIndex][order.current]}.png` //문제카드
  //   //   );
  //   //   setAnswer(imageUrl);
  //   // };
  //   fetchAnswer();
  // }, [card]);
  // //셔플 구현 - Fisher-Yates 알고리즘
  // const shuffle = (array) => {
  //   const shuffledArray = [...array];
  //   for (let i = shuffledArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [shuffledArray[i], shuffledArray[j]] = [
  //       shuffledArray[j],
  //       shuffledArray[i],
  //     ];
  //   }
  //   return shuffledArray;
  // };
  // //배열에서 정답 빼기
  // const choiceThings = () => {
  //   const choiceArray = otherChoice.filter((card) => card != answerName);
  //   return choiceArray;
  // };
  // useEffect(() => {
  //   // const choiceThings = () => {
  //   //   const choiceArray = otherChoice.filter((card) => card != answerName);
  //   //   return choiceArray;
  //   // };
  //   setChoiceOthers(shuffle(choiceThings()));
  // }, [answerName]);
  // //선택지5개 url으로 변경
  // const fetchUrls = async (array) => {
  //   const fiveUrls = [];
  //   for (const card of array) {
  //     const url = await getOne(`${card}.png`);
  //     fiveUrls.push(url);
  //   }
  //   return fiveUrls;
  // };
  // useEffect(() => {
  //   const fiveCards = [...choiceOthers].slice(0, 5);
  //   // const fetchUrls = async () => {
  //   //   const fiveUrls = [];
  //   //   for (const card of fiveCards) {
  //   //     const url = await getOne(`${card}.png`);
  //   //     fiveUrls.push(url);
  //   //   }
  //   //   return fiveUrls;
  //   // };
  //   fetchUrls(fiveCards).then((fiveUrls) => {
  //     setShuffledCards(fiveUrls);
  //   });
  // }, [choiceOthers]);
  // //6개 섞기
  // useEffect(() => {
  //   const sixCards = shuffle([...shuffledCards, answer]);
  //   setFinalCards(sixCards);
  // }, [shuffledCards]);
  // const fetchData = async () => {
  //   try {
  //     await fetchCard();
  //     await fetchAnswer();
  //     choiceThings();
  //     const fiveCards = [...choiceOthers].slice(0, 5);
  //     const fiveUrls = await fetchUrls(fiveCards);
  //     setShuffledCards(fiveUrls);
  //     const sixCards = shuffle([...shuffledCards, answer]);
  //     setFinalCards(sixCards);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // //클릭 후 새로운 문제 나타내기
  // const handleCardClick = (clickedCard) => {
  //   if (clickedCard === answer) {
  //     alert("정답입니다!");
  //     setScore((prevScore) => prevScore + 1); // 정답 카운트 상태 업데이트
  //     order.current++; // 다음 문제를 위해 order 업데이트
  //     // if (order.current === pickCnt - 1) {
  //     //   setTimeout(() => {
  //     //     navigate("/game/score", {
  //     //       state: {
  //     //         step: step,
  //     //         score: score,
  //     //       },
  //     //     });
  //     //   }, 3000);
  //     // }
  //     // 다음 문제 카드 가져오기
  //     fetchData();
  //   } else {
  //     alert("틀렸습니다! 다시 골라보세요");
  //   }
  // };
  // return (
  //   <div>
  //     <div className="step-info">
  //       {level}단계 게임 / {order.current + 1}번째 문제 <StopMenu />
  //       {nextUsedPicture}/씨발
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
  // );
};

export default GuessCard;
