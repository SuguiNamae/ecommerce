import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/About";
import NotFound from "../pages/NotFound/NotFound";
import Sale from "../pages/sale/Sale";
import ContactUs from "../pages/contactus/ContactUs";
import Shop from "../pages/shop/Shop";

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
    element: <Sale />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/shopping",
    element: <Shop/>
  }
]);
