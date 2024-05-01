import SelectMenu from "../components/Button/SelectMenu";
import back from "../images/back_ivory.png";
import MenuBar from "../components/Common/MenuBar";
const AboutPage = () => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <MenuBar />

      <div className="font3 text-3xl text-center mt-20">
        <br />
        안녕하세요, '이상'입니다.
        <br />
        치매 환자, 뇌손상 환자, 학습 장애인, 발달 인지 장애인 등 인지기능 향상이
        필요한 여러 사람들이
        <br />
        경제적이나 물리적 이유들로 쉽게 병원에 가 치료를 받을 수 없다는 사실을
        깨닫고
        <br />
        부담없이 뇌를 훈련할 수 있도록 인지기능 향상 게임 체험 사이트를
        만들었습니다.
        <br />
        게임의 반복을 통해 뇌는 기능을 회복할 수 있습니다.
        <br />
        게임의 점수는 환자에 대한 평가로 손상의 유형과 중증도를 파악하는 데
        도움이 됩니다.
        <br />
        앞으로 많은 게임들이 더 추가될 예정입니다.
        <br />
        이 사이트를 디지털 치료제로 모두가 건강한 뇌를 갖게 되길 진심으로 바라며
        개발했습니다. 감사합니다!
        <br />
        이만 총총.
        <br />
        <br />
        <br />
        -For Everyone 개발자 '이상'-
        <br />
      </div>
    </div>
  );
};

export default AboutPage;
