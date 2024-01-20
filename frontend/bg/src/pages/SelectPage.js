import { Link } from "react-router-dom";

const SelectPage = () => {
  return (
    <div>
      <div className="flex">
        <Link to={"../about"}>About</Link>
        {/* 클릭시 추가적 로딩 */}
      </div>
      <div className="text-3xl">게임 선택하기 화면 </div>
    </div>
  );
};

export default SelectPage;
