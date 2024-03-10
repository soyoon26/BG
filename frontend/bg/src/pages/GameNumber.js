import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOne } from "../api/cardApi";

const GameNumber = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const step = searchParams.get("step");
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    // 파일 데이터 가져오기
    const fetchData = async () => {
      try {
        const imageUrl = await getOne("fancy.jpg"); // 파일 이름을 지정해야 함
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
      <h1>Game Number - Step {step}</h1>
      <p>This is the Game Number component with step {step}.</p>
      {fileData && <img src={fileData} alt="뭔데 왜 안되는데" />}{" "}
      {/* 이미지 데이터를 바로 사용 */}
    </div>
  );
};

export default GameNumber;
