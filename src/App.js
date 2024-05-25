import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AppMain from './pages/AppMain';
import Profile from './pages/Profile';


import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles></GlobalStyles>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/app" element={<AppMain/>}/>
        <Route path="/perfil/:id" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;