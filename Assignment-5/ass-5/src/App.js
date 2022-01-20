import './App.css';
import React from 'react';
import Landingpage from './LandingPage/Landing_page';
import Postview from './PostView/Postview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div className="Wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />}/>
          <Route path="/postViewPage" element={<Postview />}/>
          
        </Routes>

      </BrowserRouter>

      
    </div>

);
}

export default App;
