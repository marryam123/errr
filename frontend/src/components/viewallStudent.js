import './AdminDashboard.css';
import React, { useState,useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import './AdminDashboard.css';
import axios from 'axios'

import UsersByCategory from './UserbyCategory';
import UserAttendance from './UserAttenAdmin';


const View = () => {
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
    <div>
    <Container>
   
   
    <Typography> <h1 style={{marginTop:40}}>SMIT Enroll Student Show</h1></Typography>
    <div style={{marginLeft:350,marginTop:30}}>
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

export default View;
