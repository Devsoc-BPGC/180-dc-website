import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import FrontPage from './components/FrontPage/FrontPage';

function App() {
  return (
    <React.Fragment>
      <FrontPage />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
