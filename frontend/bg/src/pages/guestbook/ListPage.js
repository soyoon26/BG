import { useSearchParams } from "react-router-dom";
import List from "../../components/guestbook/List";
import background from "../../images/back_gb.png";
const ListPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <div style={backStyles}>
      <div>
        <List />
      </div>
      ;
    </div>
  );
};

export default ListPage;
