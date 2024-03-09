import React from "react";
import { useLocation } from "react-router-dom";

const GameNumber = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");

  return (
    <div>
      <h1>Game Number - Step {step}</h1>
      <p>This is the Game Number component with step {step}.</p>
    </div>
  );
};

export default GameNumber;
