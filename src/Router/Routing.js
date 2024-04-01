import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound/NotFound";
import Sale from "../pages/sale/Sale";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/colections",
    element: <Sale/>
  }
]);
