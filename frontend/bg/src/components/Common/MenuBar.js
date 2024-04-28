import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import "./MenuBar.css";
const MenuBar = () => {
  const navigate = useNavigate();
  const handleClickMain = useCallback(() => {
    navigate({ pathname: "../../select" });
  });
  const handleClickAdd = useCallback(() => {
    navigate({ pathname: "../add" });
  });
  const handleClickMap = useCallback(() => {
    navigate({ pathname: "../../map" });
  });
  const handleClickAbout = useCallback(() => {
    navigate({ pathname: "../../about" });
  });
  return (
    <div className="bar rounded  bg-yellow-100">
      <div
        className="p-3 text-2xl"
        onClick={handleClickMain}
        style={{ cursor: "pointer" }}
      >
        {" "}
        게임 선택하기
      </div>
      <div className="pt-3 text-2xl">|</div>
      <div
        className="p-3 text-2xl"
        onClick={handleClickAdd}
        style={{ cursor: "pointer" }}
      >
        {" "}
        ADD
      </div>
      <div className="pt-3 text-2xl">|</div>
      <div
        className="p-3 text-2xl"
        onClick={handleClickMap}
        style={{ cursor: "pointer" }}
      >
        {" "}
        지도 병원 찾기
      </div>
      <div className="pt-3 text-2xl">|</div>
      <div
        className="p-3 text-2xl"
        onClick={handleClickMap}
        style={{ cursor: "pointer" }}
      >
        {" "}
        사이트 정보
      </div>
    </div>
  );
};

export default MenuBar;
