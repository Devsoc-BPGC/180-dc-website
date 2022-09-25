import React from 'react';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Capabilities from './components/Capabilities/Capabilities';
import Casses from './components/Casses/Casses';
import Clients from './components/Clients/Clients';
import FrontPage from './components/FrontPage/FrontPage';
import Values from './components/Values/Values';
import Welcome from './components/Welcome/Welcome';

function App() {
  return (
    <React.Fragment>
      <FrontPage />
      <AboutUs />
      <Welcome />
      <Capabilities />
      <Clients />
      <Casses />
      <Values />
    </React.Fragment>
  );
}

export default App;
