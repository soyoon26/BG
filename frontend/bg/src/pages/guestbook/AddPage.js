import Add from "../../components/guestbook/Add";
import background from "../../images/back_gb.png";
const AddPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  return (
    <div style={backStyles}>
      <Add />
    </div>
  );
};

export default AddPage;
