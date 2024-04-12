import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading..</div>;
const GuestBookList = lazy(() => import("../components/GuestBook/List"));
const GuestBookRead = lazy(() => import("../components/GuestBook/Read"));
const guestbookRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <GuestBookList />
        </Suspense>
      ),
    },
    { path: "", element: <Navigate replace to="list" /> },
    {
      path: "read/:no",
      element: (
        <Suspense fallback={Loading}>
          <GuestBookRead />
        </Suspense>
      ),
    },
  ];
};

export default guestbookRouter;
