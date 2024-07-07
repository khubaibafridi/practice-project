import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRestriction = ({ component: Component, isAuthenticated }) => {
  return isAuthenticated ? Component : <Navigate to="/" />;
};

export default UserRestriction;
