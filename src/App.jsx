import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import TitleBar from './Components/TitleBar/TitleBar';


function App() {
 
  return (
      <div className="container-fluid p-0 m-0">  
        <TitleBar />      
        <MusicTable />    
      </div>
  );
}

export default App;
