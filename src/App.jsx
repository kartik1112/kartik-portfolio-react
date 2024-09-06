/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Screens/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./Screens/Projects/Project";
import Blogs from "./Screens/Blogs/Blogs";
import Resume from "./Screens/Resume/Resume";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
