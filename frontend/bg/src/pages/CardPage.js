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
  const [level, setLevel] = useState(1);

  const next = (nextStep, level) => {
    setStep(nextStep);
    setLevel(level);
    console.log("씨발", level);
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
        {step === "gameCard" && <GameCard next={() => setStep("guess")} />}
        {step === "guess" && <GuessCard next={() => setStep("score")} />}
        {step === "score" && <Score />}
      </main>
    </div>
  );
};
export default CardPage;
