import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />}></Route>
      <Route path="/movies/:id" element={<MovieDetails />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
