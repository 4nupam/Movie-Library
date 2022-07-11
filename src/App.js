import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
import Signin from "./components/authentication/Signin";
import Signup from "./components/authentication/Signup";
import Header from './components/navbar/Header';
import Movie from './components/movie/Movie';

const App = () => {

  return(
  <Router>
  <ToastContainer bodyClassName="toastbody"/>
  <Header />
  <Routes>
    <Route path="/" element= {<Home />} />
    <Route path="/list" element= {<Movie />} />
    <Route path="/sign-in" element= {<Signin />} />
    <Route path="/sign-up" element= {<Signup />} />
  </Routes>
  </Router>
  );
};

export default App;
