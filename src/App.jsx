import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TyssRoute from './Routes/TyssRoute';
const App = () => {
  return (
    <section className="mainBlock">
      <Router>
        <Navbar />
        <TyssRoute />
      </Router>
    </section>
  );
};

export default App;
