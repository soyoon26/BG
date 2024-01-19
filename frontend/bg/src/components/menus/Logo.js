import logo from "../../images/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={logo} alt="로고" className="w-3/5" />
    </div>
  );
};

export default Logo;
