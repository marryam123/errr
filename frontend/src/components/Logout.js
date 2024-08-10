import React from 'react';
import './Logout.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return <button
    className='logout-btn'
    onClick={handleLogout}
  >
    Logout
  </button>;
};

export default Logout;