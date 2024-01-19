import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>; //지연로딩, 필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));

const root = createBrowserRouter([
  {
    path: "", //경로가 '/' 아니면 아무것도 없으면 MainPage 컴포넌트를 보여줌
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <About />
      </Suspense>
    ),
  },
]);
//어떤 컴포넌트를 보여줄 것인지 결정하는 역할
export default root;
