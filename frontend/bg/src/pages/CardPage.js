//페이지의 흐름을 한 눈에 볼 수 있게 하기
import React, { useState } from "react";
import SetUp from "../components/GameElements/SetUp";
import HowTo from "../components/GameElements/HowTo";
import GameCard from "../components/CardGame/GameCard";
import GuessCard from "../components/CardGame/GuessCard";
import Score from "../components/GameElements/Score";
const gameType = "card";
const CardPage = () => {
  const [step, setStep] = useState("setUp");
  const [usedPicture, setUsedPicture] = useState(["?"]);
  const [usedNumber, setUsedNumber] = useState(["?"]);
  const [level, setLevel] = useState(0);

  const next = (nextStep, level) => {};
  const nextCard = (nextStep, nextLevel, nextUsedPicture, nextUsedNumber) => {
    setStep(nextStep);
    setLevel(nextLevel);
    setUsedPicture(nextUsedPicture);
    setUsedNumber(nextUsedNumber);
  };

  return (
    <div>
      <main>
        {step === "setUp" && (
          <SetUp
            next={(nextStep, nextLevel) => {
              setStep(nextStep);
              setLevel(nextLevel);
            }}
            gameType={gameType}
            level={level}
          />
        )}
        {step === "howTo" && (
          <HowTo
            next={(nextStep, nextLevel) => {
              setStep(nextStep);
              setLevel(nextLevel);
            }}
            gameType={gameType}
            level={level}
          />
        )}
        {step === "gameCard" && (
          <GameCard
            nextCard={(
              nextStep,
              nextLevel,
              nextUsedPicture,
              nextUsedNumber
            ) => {
              setStep(nextStep);
              setLevel(nextLevel);
              setUsedPicture(nextUsedPicture);
              setUsedNumber(nextUsedNumber);
              console.log(nextUsedPicture);
              console.log(nextUsedNumber);
            }}
            gameType={gameType}
            level={level}
            usedPicture={usedPicture}
            usedNumber={usedNumber}
          />
        )}
        {step === "guess" && (
          <GuessCard
            nextCard={(
              nextStep,
              nextLevel,
              nextUsedPicture,
              nextUsedNumber
            ) => {
              setStep(nextStep);
              setLevel(nextLevel);
              setUsedPicture(nextUsedPicture);
              setUsedNumber(nextUsedNumber);
              console.log(nextUsedPicture);
              console.log(nextUsedNumber);
            }}
            gameType={gameType}
            level={level}
            usedPicture={usedPicture}
            usedNumber={usedNumber}
          />
        )}
        {step === "score" && (
          <Score level={level} usedPicture={usedPicture} score={usedNumber} />
        )}
      </main>
    </div>
  );
};
export default CardPage;
