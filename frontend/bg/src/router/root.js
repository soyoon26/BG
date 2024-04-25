import { Children, Suspense, lazy } from "react";
import guestbookRouter from "./guestbookRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>; //지연로딩, 필요한 순간까지 컴포넌트를 메모리상으로 올리지 않도록
const Main = lazy(() => import("../pages/MainPage"));
const About = lazy(() => import("../pages/AboutPage"));
const Select = lazy(() => import("../pages/Select"));
const SetUp = lazy(() => import("../components/GameElements/SetUp"));
const HowTo = lazy(() => import("../components/GameElements/HowTo"));
const GameCard = lazy(() => import("../components/CardGame/GameCard"));
//const GameNumber = lazy(() => import("../components/GameNumber"));
const GuessCard = lazy(() => import("../components/CardGame/GuessCard"));
const Score = lazy(() => import("../components/GameElements/Score"));
const CardPage = lazy(() => import("../pages/CardPage"));
const NumberPage = lazy(() => import("../pages/NumberPage"));
const MapPage = lazy(() => import("../pages/MapPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));
const GuestIndex = lazy(() => import("../pages/guestbook/IndexPage"));
const GuestList = lazy(() => import("../pages/guestbook/ListPage"));

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
  {
    path: "select",
    element: (
      <Suspense fallback={Loading}>
        <Select />
      </Suspense>
    ),
  },
  {
    path: "game/set",
    element: (
      <Suspense fallback={Loading}>
        <SetUp />
      </Suspense>
    ),
  },
  // {
  //   path: "/game/card",
  //   element: (
  //     <Suspense fallback={Loading}>
  //       <GameCard />
  //     </Suspense>
  //   ),
  // },
  //{
  //path: "/game/number",
  //element: <Suspense fallback={Loading}>{/* <GameNumber /> */}</Suspense>,
  //},
  {
    path: "game/howto",
    element: (
      <Suspense fallback={Loading}>
        <HowTo />
      </Suspense>
    ),
  },
  {
    path: "game/guess",
    element: (
      <Suspense fallback={Loading}>
        <CardPage />
      </Suspense>
    ),
  },
  {
    path: "game/score",
    element: (
      <Suspense fallback={Loading}>
        <Score />
      </Suspense>
    ),
  },
  {
    path: "game/card",
    element: (
      <Suspense fallback={Loading}>
        <CardPage />
      </Suspense>
    ),
  },
  {
    path: "game/number",
    element: (
      <Suspense fallback={Loading}>
        <NumberPage />
      </Suspense>
    ),
  },
  {
    path: "map",
    element: (
      <Suspense fallback={Loading}>
        <MapPage />
      </Suspense>
    ),
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={Loading}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: "guestbook",
    element: (
      <Suspense fallback={Loading}>
        <GuestList />
      </Suspense>
    ),
    children: guestbookRouter(),
  },
]);
//어떤 컴포넌트를 보여줄 것인지 결정하는 역할
export default root;
