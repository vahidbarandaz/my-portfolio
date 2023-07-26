import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import Home from './components/Home';
import Projects from './components/Projects';
import Burger from './components/shared/Burger';

const App = () => {
  return (
    <>
    <Burger />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />} />
        <Route path='/Contactinfo' element={<ContactInfo />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/*' element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
