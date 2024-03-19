import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOne } from "../api/cardApi";
import "./GameCard.css";

const GameNumber = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");
  const [fileData, setFileData] = useState(null); //링크
  const [usedPictureCards, setUesdPictureCards] = useState([]); //사용된 그림 카드 배열
  const [usedNumberCards, setUsedNumberCards] = useState([]); //사용된 숫자 카드 배열

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
  ]; //사용하지 않은 그림카드 배열
  const numberCards = Array.from({ length: 10 }, (_, i) => (i + 1).toString()); //사용하지 않은 숫자카드 배열

  useEffect(() => {
    // 파일 데이터 가져오기
    const fetchData = async () => {
      try {
        const imageUrl = await getOne("1.png"); // 파일 이름을 지정해야 함
        console.log(imageUrl, "카드 가져오기 성공"); // 여기에 추가
        setFileData(imageUrl);
      } catch (error) {
        console.error("Error fetching file data:", error);
      }
    };
    fetchData(); // 컴포넌트가 처음 렌더링될 때 파일 데이터를 가져오도록 함
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
