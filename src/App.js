import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import OurWork from './OurWork';
import JoinOurTeam from './JoinOurTeam';
import PageNotFound from './PageNotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="ourWork" element={<OurWork />} />
          <Route path="joinOurTeam" element={<JoinOurTeam />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
