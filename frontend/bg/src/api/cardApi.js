import axios from "axios";

export const API_SERVER_CARD = "http://localhost:8080";

const prefix = `${API_SERVER_CARD}/api/cards/view`;

export const getOne = async (fileName) => {
  const res = await axios.get(`${prefix}/${fileName}`, {
    responseType: "arraybuffer",
  }); // ArrayBuffer로 응답 받도록 설정
  const arrayBuffer = res.data;

  // ArrayBuffer를 Blob으로 변환
  const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

  // Blob을 URL.createObjectURL을 사용하여 이미지 URL로 변환
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl; // 이미지 URL 반환
};
