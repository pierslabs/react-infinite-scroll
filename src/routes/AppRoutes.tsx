import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import LazyImages from "../pages/LazyImages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lazy" element={<LazyImages />} />
      <Route path="/intersection-observer" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
