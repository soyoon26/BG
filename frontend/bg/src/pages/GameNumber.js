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
        const data = await getOne("fancy.jpg"); // 파일 이름을 지정해야 함
        console.log(data); // 여기에 추가
        setFileData(data);
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
      {fileData && <img src={fileData.url} alt="뭔데 왜 안되는데" />}
    </div>
  );
};

export default GameNumber;
