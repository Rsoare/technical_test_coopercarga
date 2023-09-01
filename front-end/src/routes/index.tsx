import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";

const Router = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
      </Routes>
   );
};

export default Router;
