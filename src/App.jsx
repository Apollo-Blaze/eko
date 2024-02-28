import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './StartPage';
import VendorPage from './VendorPage';
import CustomerPage from './CustomerPage';
import LoginPage from './LoginPage';
import YourComponent from './show'; // Assuming YourComponent is correctly imported
import DeleteDocument from './delete';
import UpdateDocument from './update';
import BiddingPage from './bid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vendor" element={<VendorPage />} />
        <Route path="/show" element={<YourComponent />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/delete" element={<DeleteDocument />} />
        <Route path="/update" element={<UpdateDocument />} />
        <Route path="/bid/:collectionName/:userId" element={<BiddingPage />} />
</Routes>
    </Router> 
  );
}

export default App;
