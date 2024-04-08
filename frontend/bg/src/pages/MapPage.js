import MapSearch from "../components/Map/MapSearch";
import back from "../images/back_ivory.png";
const MapPage = () => {
  const backStyles = {
    backgroundImage: `url(${back})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <MapSearch />
    </div>
  );
};

export default MapPage;
