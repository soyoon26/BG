import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOne } from "../api/cardApi";
import "./GameCard.css";

const GameNumber = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    // 파일 데이터 가져오기
    const fetchData = async () => {
      try {
        const imageUrl = await getOne("1.png"); // 파일 이름을 지정해야 함
        console.log(imageUrl); // 여기에 추가
        setFileData(imageUrl);
      } catch (error) {
        console.error("Error fetching file data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <p className="step-info">{step}단계 게임</p>
      <div className="card-container">
        {fileData && (
          <img className="match-card" src={fileData} alt="그림카드" />
        )}
        {fileData && (
          <img className="match-card" src={fileData} alt="숫자카드" />
        )}
      </div>
    </div>
  );
};

export default GameNumber;
