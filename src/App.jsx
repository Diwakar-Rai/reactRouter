import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import DashBoard from './components/users/DashBoard';
import Users from './components/users/Users';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="users" element={<Users />}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
