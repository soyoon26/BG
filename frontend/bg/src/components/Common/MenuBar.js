import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
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
    <div>
      <div onClick={handleClickMain}> 게임 선택하기</div>
      <div onClick={handleClickAdd}> ADD</div>
      <div onClick={handleClickMap}> 지도 병원 찾기</div>
      <div onClick={handleClickMap}> 사이트 정보</div>
    </div>
  );
};

export default MenuBar;
