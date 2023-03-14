import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Users from "./components/users/Users";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <section className="mainBlock">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Users />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </section>
  );
};

export default App;
