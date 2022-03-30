import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar'

function App() {
 
  return (
      <div className="container-fluid">        
        <MusicTable />         
      </div>
  );
}

export default App;
