import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import CustomerPage from './CustomerPage';
import LoginPage from './LoginPage';
import DeleteDocument from './delete';
import UpdateDocument from './update';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/delete" element={<DeleteDocument />} />
        <Route path="/update" element={<UpdateDocument />} />
      </Routes>
    </Router>
  );
}

export default App;
