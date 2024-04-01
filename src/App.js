import "./App.css";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import { RouterProvider } from "react-router";
import { router } from "./Router/Routing";

function App() {

  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
