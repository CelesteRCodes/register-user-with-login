import React, { useState } from 'react';
import './App.css';

import Form from './components/Form';
import HomePage from './components/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password, username) => {
    setIsLoggedIn(true);
  };


  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {!isLoggedIn && <Form onLogin={loginHandler} />}
        {isLoggedIn && <HomePage onLogout={logoutHandler} />}
      </header>
    </div>
  );
}

export default App;
