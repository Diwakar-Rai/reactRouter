import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return <section id="mainBlock">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='*' exact component={PageNotFound} />
      </Switch>
    </Router>
  </section>;
};

export default App;
