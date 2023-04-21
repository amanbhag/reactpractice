import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePassword from "./components/updatePassword";
import DeleteUser from "./components/DeleteUser";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Navbar2 />
      <Routes>
        <Route path="/login" element=<Login /> />
        <Route path="/register" element=<Register /> />
        <Route path="/password" element=<UpdatePassword /> />
        <Route path="/delete" element=<DeleteUser /> />
      </Routes>
    </>
  );
};

export default App;
