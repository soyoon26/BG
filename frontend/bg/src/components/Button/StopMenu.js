//게임 도중에만 나타나기

const StopMenu = () => {
  return (
    <div className=" flex justify-end p-3 font-large mt-1">
      <button className="bg-red-500 text-white p-5 mt-0 rounded-lg">
        그만두기
      </button>
    </div>
  );
};

export default StopMenu;
