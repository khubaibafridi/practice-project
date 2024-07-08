import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Wallet from '../pages/ConnectWallet';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Assets from '../pages/Assets';
import Transactions from '../pages/Transactions';
import FormLayout from '../layout/FormLayout';
import UserRestriction from './UserRestriction';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Wallet /> } />
      <Route path="/login" element={<Login />} />
      <Route path='' element={<FormLayout/>}>
        <Route path="dashboard" element={<UserRestriction> <Dashboard /> </UserRestriction>} />
        <Route path="assets" element={<UserRestriction> <Assets /> </UserRestriction>} />
        <Route path="transactions" element={<UserRestriction> <Transactions /> </UserRestriction>} />
      </Route>

    </Routes>

  )
}

export default AppRoutes
