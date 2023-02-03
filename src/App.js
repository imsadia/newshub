import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route } from "react-router-dom"

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 9;
  const country = 'in';

  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<News key="everything" apiKey={apiKey} pageSize={pageSize} country={country} category='everything' />} />
        <Route exact path="general" element={<News key="general" apiKey={apiKey} pageSize={pageSize} country={country} category='general' />} />
        <Route exact path="entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={pageSize} country={country} category='entertainment' />} />
        <Route exact path="business" element={<News key="business" apiKey={apiKey} pageSize={pageSize} country={country} category='business' />} />
        <Route exact path="health" element={<News key="health" apiKey={apiKey} pageSize={pageSize} country={country} category='health' />} />
        <Route exact path="sports" element={<News key="sports" apiKey={apiKey} pageSize={pageSize} country={country} category='sports' />} />
        <Route exact path="science" element={<News key="science" apiKey={apiKey} pageSize={pageSize} country={country} category='science' />} />
        <Route exact path="technology" element={<News key="technology" apiKey={apiKey} pageSize={pageSize} country={country} category='technology' />} />
      </Routes>
    </div>
  )
}

export default App

