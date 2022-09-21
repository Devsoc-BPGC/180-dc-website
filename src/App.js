import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Capabilities from './components/Capabilities/Capabilities';
import FrontPage from './components/FrontPage/FrontPage';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <React.Fragment>
      <FrontPage />
      <AboutUs />
      <Welcome />
      <Capabilities />
    </React.Fragment>
  );
}

export default App;
