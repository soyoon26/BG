import { useCallback } from "react";
import background from "../../images/back_gb.png";
import {
  createSearchParams,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";
import Read from "../../components/guestbook/Read";
import "./ReadPage.css";
const ReadPage = () => {
  const backStyles = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    height: "100vh",
  };
  const { no } = useParams();
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  const queryStr = createSearchParams({ page, size }).toString();

  const toModify = useCallback(
    (no) => {
      console.log("수정 이동");
      navigate({ pathname: `/guestbook/modify/${no}`, search: queryStr });
    },
    [no, page, size]
  );
  const toList = useCallback(() => {
    navigate({ pathname: `../../guestbook/list`, search: queryStr });
  }, [page, size]);
  return (
    <div style={backStyles}>
      <div className="read-container">
        <Read no={no} />
        <button
          className="l-btn bg-red-500 text-white p-1 m-3 rounded-lg"
          onClick={() => toList()}
        >
          목록
        </button>
      </div>
    </div>
  );
};

export default ReadPage;
