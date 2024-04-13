import { useCallback } from "react";
import {
  createSearchParams,
  useSearchParams,
  useParams,
  useNavigate,
} from "react-router-dom";

const ReadPage = () => {
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
    navigate({ pathname: `guestbook/list`, search: queryStr });
  }, [page, size]);
  return (
    <div>
      read Page {no}
      <button onClick={() => toModify(12)}>TestModufy</button>
      <button onClick={() => toList()}>TestList</button>
      <div>sasdad</div>
    </div>
  );
};

export default ReadPage;
