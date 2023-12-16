
import React, { createContext, useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import BookCatalog from './components/BookCatalog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export const Context=createContext(null);
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };


  return (
    <div className="App">
      <Context.Provider value={'welcome'}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/bookcatalog" element={<BookCatalog />} />
          <Route path='/reg' element={<Registration/>}/>
          <Route path="/bookcatalog" element={<BookCatalog />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider> 
    </div>
  );
  }


export default App;