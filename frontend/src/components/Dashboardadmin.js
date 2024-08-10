import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import './AdminDashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Logout from './Logout';
import UsersByCategory from './UserbyCategory';
import UserAttendance from './UserAttenAdmin';

const Dashboardadmin = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const CategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedUserId(null); 
  };
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };


  return (
    <div className='main-container'>
    <Container>
    <Typography><h1>Admin Dashboard</h1></Typography>
    <Typography>Welcome to the Admin Attendence portal!</Typography>
  
    <Typography> <h1>SMIT Enroll Student Show</h1></Typography>
    <div className='l'>
    <button onClick={() => CategoryClick('GraphicDesign')} className="button-style">
        Graphic Design
      </button>
      <button onClick={() => CategoryClick('WebDevelopment')} className="button-style">
        Web Development
      </button>
      <button onClick={() => CategoryClick('Ai')} className="button-style">
        AI
      </button>
      </div>
      {selectedCategory && !selectedUserId && <UsersByCategory category={selectedCategory} onUserClick={handleUserClick} />}
      {selectedUserId && <UserAttendance userId={selectedUserId} />}

          
  </Container>
    </div>
  );
}

export default Dashboardadmin;
