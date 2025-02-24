import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Location from "../components/componentsLocation/Location";
export const App_Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home/>} />

      <Route path="/ubicacion" element={<Location/>} />
      
    </Routes>
  );
};
