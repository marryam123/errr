import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './Auth';

const AuthRoute = ({ element: Element }) => {
    const location = useLocation();
    return isAuthenticated() ? (
        Element
      ):(
        <Navigate to="/login" state={{ from: location }} />
      );
    };

    export default AuthRoute;