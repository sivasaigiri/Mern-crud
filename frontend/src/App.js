import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', background: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
