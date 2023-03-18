<<<<<<< HEAD
import React from 'react'
import './App.scss'

// Import modules here
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom';


// Import actions here
import {setUser} from './redux/reducers/authReducer'

// Import components here
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
   <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
   </>
  )
}

export default App
=======
import React from "react";
import "./App.scss";

// Import modules here
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

// Import actions here
import { setCrumbs } from "./services/redux/slices/main";

// Import components here
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
>>>>>>> 1823166 (new commit)
