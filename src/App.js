<<<<<<< HEAD
import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./components/Pages/HomePage";
import ContactsPage from "./components/Pages/ContactsPage";
=======
import './App.css'
import { Route, Routes } from 'react-router';
import HomePage from './components/Pages/HomePage';
import React from 'react';
import AboutUsPages from './components/Pages/AboutUsPages';
>>>>>>> 6a4a8fb9aa7168f943bc579cf1aae6645c475cc5

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
=======
        <Route path='/' element={<HomePage />}/>
          <Route path="/about" element={ <AboutUsPages />} />
>>>>>>> 6a4a8fb9aa7168f943bc579cf1aae6645c475cc5
      </Routes>
    </div>
  );
}

export default App;
