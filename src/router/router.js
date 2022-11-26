import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Stat from "../pages/Stat";
import About from "../pages/About";

export const useRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/stat" element={<Stat />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
