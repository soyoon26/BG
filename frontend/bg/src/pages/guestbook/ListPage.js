import { useSearchParams } from "react-router-dom";
import List from "../../components/guestbook/List";
import background from "../../images/back_gb.png";

import "./ListPage.css";
const ListPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100%",
  };
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <div style={backStyles}>
      <div className="list-container">
        <List />
      </div>
    </div>
  );
};

export default ListPage;
