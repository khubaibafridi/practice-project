import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Wallet from '../pages/ConnectWallet';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Assets from '../pages/Assets';
import Transactions from '../pages/Transactions';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Wallet /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assets" element={<Assets />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>

  )
}

export default AppRoutes
