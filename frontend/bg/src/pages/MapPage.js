import MapSearch from "../components/Map/MapSearch";
import SelectMenu from "../components/Button/SelectMenu";
import back from "../images/back_ivory.png";
import "./MapPage.css";
const MapPage = () => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <div className="map-container">
        <div className="map-txt">
          전문적인 진단을 받고 싶다면 가까운 병원을 검색해보아요 🏥
        </div>
        <div className="select-container-m">
          <SelectMenu />
        </div>
        <MapSearch />
      </div>
    </div>
  );
};

export default MapPage;
