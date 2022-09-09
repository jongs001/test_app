import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import Home from "./home";
import Drivers from "./drivers";
import Login from "./login";
import About from "./about"
import Customer from './customer';
import config from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { Routes, Route } from "react-router-dom";


Amplify.configure(config);



function App() {
  return (
    <div className='App'>
      <Routes><Route path="/" element={<Home />} /></Routes>
      <Routes><Route path="/drivers" element={<Drivers />} /></Routes>
      <Routes><Route path="/login" element={<Login />} /></Routes>
      <Routes><Route path="/about" element={<About />} /></Routes>
      <Routes><Route path="/customer" element={<Customer />} /></Routes>
    </div>
  );
}

export default App;
