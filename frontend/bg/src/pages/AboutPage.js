import SelectMenu from "../components/menus/SelectMenu";

const AboutPage = () => {
  return (
    <div>
      <SelectMenu></SelectMenu>
      <div className="font3 text-3xl">
        안녕하세요
        <br />
        저는 병원에서 게임을 하다 모두가 체험해봤으면 좋겠다는 생각에 만들어
        보았습니다.
        <br />이 게임은 뇌를 재훈련하여 문제를 보상하는 여러 방법을 교육하는
        것입니다. (뇌는 기능을 회복할 수 있습니다.)
        <br />
        또한 환자의 평가는 손상의 유형과 중증도를 파악하는 데 도움이 됩니다.
        <br />
        게임들은 추가될 예정입니다.
        <br />
        모두가 건강한 뇌를 갖길 바라요. 감사합니다!
      </div>
    </div>
  );
};

export default AboutPage;
