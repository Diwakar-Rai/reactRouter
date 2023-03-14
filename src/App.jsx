import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import TyssRoute from "./Routes/TyssRoute";
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <TyssRoute />
      </Router>
    </div>
  );
};

export default App;
