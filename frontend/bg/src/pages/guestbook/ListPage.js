import { useSearchParams, Link } from "react-router-dom";
import List from "../../components/guestbook/List";
import background from "../../images/back_gb.png";
import g_logo from "../../images/g_logo.png";
import MenuBar from "../../components/Common/MenuBar";
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
      {/* <MenuBar /> */}
      <div className="g_logo-container">
        <img src={g_logo} alt="Guestbook Logo" className="guestbook-logo" />
      </div>
      <Link to={"../add"}>
        <div className="write rounded bg-red-400 text-2xl pt-1 pb-1">
          글쓰기
        </div>
      </Link>
      <div className="list-container">
        <List />
      </div>
    </div>
  );
};

export default ListPage;
