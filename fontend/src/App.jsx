import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./../context/auth_context";

import Login from "./../components/Login/login";
import Home from "./../components/Home";
import Notfound from "./../components/Notfound";
import Layout from "../components/Layout/Layout";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Layout" element={<Layout />}></Route>
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
