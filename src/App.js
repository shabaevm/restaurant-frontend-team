import './App.css'
import { Route, Routes } from 'react-router';
import HomePage from './components/Pages/HomePage';
import React from 'react';
import AboutUsPages from './components/Pages/AboutUsPages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />}/>
          <Route path="/about" element={ <AboutUsPages />} />
      </Routes>
    </div>
  );
}

export default App;
