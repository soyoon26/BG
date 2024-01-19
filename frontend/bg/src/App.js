import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <RouterProvider router={root}>
      <MainPage />;
    </RouterProvider>
  );
}

export default App;
