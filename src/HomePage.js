import AboutUs from './components/AboutUs/AboutUs';
import Capabilities from './components/Capabilities/Capabilities';
import Casses from './components/Casses/Casses';
import Clients from './components/Clients/Clients';
import ContactUs from './components/ContactUs/ContactUs';
import FrontPage from './components/FrontPage/FrontPage';
import Mentors from './components/Mentors/Mentors';
import Values from './components/Values/Values';
import Welcome from './components/Welcome/Welcome';
import React from 'react';

const HomePage = () => {
    return (
      <React.Fragment>
        <FrontPage />
        <AboutUs />
        <Welcome />
        <Capabilities />
        <Clients />
        <Casses />
        <Values />
        <Mentors />
        <ContactUs />
      </React.Fragment>
    );
}
  
export default HomePage  ;