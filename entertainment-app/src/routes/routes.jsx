import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";
import ResultPage from "../pages/ResultPage";
import PageNotFound from "../components/PageNotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Movies />,
      },
      {
        path: "/:typeOfData/genre",
        element: <ListPage />,
      },
      {
        path: "/tv",
        element: <TvSeries />,
      },

      {
        path: "/:type/:id",
        element: <DetailPage />,
      },
      {
        path: "/tv/:id",
        element: <DetailPage />,
      },
      {
        path: "/results",
        element: <ResultPage />,
      },
      { path: "*", element: <PageNotFound /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
