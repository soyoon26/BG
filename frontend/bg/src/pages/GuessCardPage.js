//카드 맞추기 ,
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../api/cardApi";
import StopMenu from "../components/Button/StopMenu";
import "./GuessCardPage.css";
const GuessCardPage = () => {
  const location = useLocation();
  const { step, usedNumberCards, usedPictureCards } = location.state;

  return (
    <div>
      {step}
      {usedNumberCards}
    </div>
  );
};

export default GuessCardPage;
