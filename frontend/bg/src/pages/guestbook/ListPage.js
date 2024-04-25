import { useSearchParams } from "react-router-dom";
import List from "../../components/guestbook/List";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;
  return (
    <div>
      <div>
        List Page {page} --- {size}
        <List />
      </div>
      ;
    </div>
  );
};

export default ListPage;
