import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavPage from './components/NavPage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import StackPage from './pages/StackPage';
import MessagePage from './pages/MessagePage';
import Background from './components/background';
import PlayerState from './components/PlayerState';
const App = () => {
  return (
    <Router>
      <Background />
      <NavPage />
      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/skill' element={<SkillPage />} />
        <Route path='/stack' element={<StackPage />} />
        <Route path='/message' element={<MessagePage />} />
      </Routes>
      <PlayerState />
    </Router>
  );
}

export default App;
