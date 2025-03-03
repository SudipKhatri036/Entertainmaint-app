import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";
import PageNotFound from "../pages/PageNotFound";
import DetailPage from "../pages/DetailPage";
import ListPage from "../pages/ListPage";

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
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/movies/genre",
        element: <ListPage />,
      },
      {
        path: "/series",
        element: <TvSeries />,
      },
      {
        path: "/series/genre",
        element: <ListPage />,
      },
      {
        path: "/movies/:id",
        element: <DetailPage />,
      },
      {
        path: "/series/:id",
        element: <DetailPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
