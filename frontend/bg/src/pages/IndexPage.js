import Read from "../components/guestbook/Read";
import background from "../../images/back_gb.png";
const IndexPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div>
      <div>List</div>
      <div>Index</div>
      <Read />
    </div>
  );
};

export default IndexPage;
