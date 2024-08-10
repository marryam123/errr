import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../images/saylani image.JPG';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const DashboardHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
        
      <Navbar expand="lg" variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/"><img src={image} style={{ height: 50, width: 70 }} alt="Logo"/></Navbar.Brand>
          <Navbar.Brand href="/">AttendanceApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="fs-5">
              <Nav.Link><Link to="/dashbord" className="nav-link">Dashboard</Link></Nav.Link>
              <Nav.Link><Link to="/addattendence" className="nav-link">Mark Attendance</Link></Nav.Link>
              <Nav.Link><Link to="/allatten" className="nav-link">View All Attendance</Link></Nav.Link>
              <Nav.Link onClick={handleLogout} className="nav-link">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default DashboardHeader;