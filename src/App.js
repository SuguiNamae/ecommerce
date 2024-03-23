import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/About";
function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       {/* <Route path={":type"} element={<HomePage />} />
  //       <Route path=":type/:id" element={<PetDetailsPage />} />
  //       <Route path="Search" element={<SearchPage />} />
  //       <Route path="pet-detail-not-found" element={<PetDetailsNotFound/>} /> */}
  //     </Route>
  //   )
  // );
  return (
    <div className="App">
      <About/>
    </div>
  );
}

export default App;
