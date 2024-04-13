import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading..</div>;
const GuestList = lazy(() => import("../pages/guestbook/ListPage"));
const GuestRead = lazy(() => import("../pages/guestbook/ReadPage"));
const GuestAdd = lazy(() => import("../pages/guestbook/AddPage"));
const GuestModify = lazy(() => import("../pages/guestbook/ModifyPage"));

const guestbookRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <GuestList />
        </Suspense>
      ),
    },
    {
      path: "",
      element: <Navigate repalce to="list" />,
    },
    {
      path: "read/:no",
      element: (
        <Suspense fallback={Loading}>
          <GuestRead />
        </Suspense>
      ),
    },
    {
      path: "add",
      element: (
        <Suspense fallback={Loading}>
          <GuestAdd />
        </Suspense>
      ),
    },
    {
      path: "modify/:no",
      element: (
        <Suspense fallback={Loading}>
          <GuestModify />
        </Suspense>
      ),
    },
  ];
};

export default guestbookRouter;
