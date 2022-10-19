import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Project from "./routes/Project";
import Contact from "./routes/Home";

import { Route, Routes} from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/project" element={<Project /> } />
      <Route path="/" element={<About /> } />
      <Route path="/" element={<Contact /> } />
    </Routes>
    </>
  );
}

export default App;
