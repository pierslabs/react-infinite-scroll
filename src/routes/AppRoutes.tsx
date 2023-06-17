import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import FakePage from "../pages/FakePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fake" element={<FakePage />} />
    </Routes>
  );
};

export default AppRoutes;
