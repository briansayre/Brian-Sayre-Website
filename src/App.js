import React from 'react';
import './App.css';

import Nav from "./components/Nav/Nav";
import briansayre from "./images/briansayre.png";

function App() {
  return (
    <div className="body">
      <div className="header">
        <img alt="Brian Sayre" className="brian-sayre-img"src={briansayre} />
      </div>
      <Nav />
    </div>
  );
}

export default App;
