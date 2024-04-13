import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ReadPage = () => {
  const { no } = useParams();
  const navigate = useNavigate();
  const toModify = useCallback(
    (no) => {
      console.log("수정 이동");
      navigate({ pathname: `/guestbook/modify/${no}` });
    },
    [no]
  );
  return (
    <div>
      read Page {no} <button onClick={() => toModify(12)}>TestModufy</button>
      <div>sasdad</div>
    </div>
  );
};

export default ReadPage;
