import "./App.css";
// material UI 重置
import "./assets/css/normalize.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ToDoBoard from "./components/ToDoBoard";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import Demo from "./components/Demo";
import Index from "./views/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="*" element={<Index />}>
            <Route index element={<Home />} />
            <Route path="demo" element={<Demo />} />
            <Route exact path="board" element={<ToDoBoard />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
