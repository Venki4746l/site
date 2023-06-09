import React  from "react";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import DisplayUser from "./componets/DisplayUser";

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route expact path="/" element={<DisplayUser />} />
        <Route expact path="/login" element={<LoginPage />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
