//순서 거꾸로 ......... 그림 아니면 숫자

import React, { useState } from "react";
import SetUp from "../components/GameElements/SetUp";
import HowTo from "../components/GameElements/HowTo";
import GameNumber from "../components/NumberGame/GameNumber";
import ReverseNumber from "../components/NumberGame/ReverseNumber";
import Score from "../components/GameElements/Score";
const gameType = "number";
const NumberPage = () => {
  const [step, setStep] = useState("setUp");
  const [level, setLevel] = useState(0);
  const [usedNumber, setUsedNumber] = useState([]);

  const next = (nextStep, level) => {};
  const nextCard = (nextStep, nextLevel, nextUsedNumber) => {
    // setStep(nextStep);
    // setLevel(nextLevel);
    // setUsedPicture(nextUsedPicture);
    // setUsedNumber(nextUsedNumber);
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
        {step === "gameNumber" && (
          <GameNumber
            nextCard={(nextStep, nextLevel, nextUsedNumber) => {
              setStep(nextStep);
              setLevel(nextLevel);
              setUsedNumber(nextUsedNumber);
              console.log(nextUsedNumber);
            }}
            gameType={gameType}
            level={level}
            usedNumber={usedNumber}
          />
        )}
        {step === "reverse" && (
          <ReverseNumber
            nextCard={(nextStep, nextLevel, nextUsedNumber) => {
              setStep(nextStep);
              setLevel(nextLevel);
              setUsedNumber(nextUsedNumber);
              console.log(nextUsedNumber);
            }}
            gameType={gameType}
            level={level}
            usedNumber={usedNumber}
          />
        )}
        {step === "score" && <Score level={level} score={usedNumber} />}
      </main>
    </div>
  );
};

export default NumberPage;
