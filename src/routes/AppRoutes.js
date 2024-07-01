import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Wallet from '../pages/ConnectWallet';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Wallet /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  )
}

export default AppRoutes
