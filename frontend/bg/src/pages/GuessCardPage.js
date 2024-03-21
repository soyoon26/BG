//카드 맞추기 ,
import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getOne } from "../api/cardApi";
import StopMenu from "../components/Button/StopMenu";
import "./GuessCardPage.css";
const GuessCardPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = parseInt(searchParams.get("step"));
};

export default GuessCardPage;
