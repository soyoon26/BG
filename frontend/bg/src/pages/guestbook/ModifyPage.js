import { useNavigate } from "react-router-dom";

const ModifyPage = ({ no }) => {
  const ModifyPage = ({ no }) => {
    const navigate = useNavigate();
    const toRead = () => {
      navigate({ pathname: `/guestbook/list` });
    };
    const toList = () => {
      navigate({ pathname: `/guestbook/list` });
    };
  };
  return <div>Modify page</div>;
};

export default ModifyPage;
