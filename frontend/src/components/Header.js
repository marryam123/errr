import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from '../images/saylani image.JPG';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
  return (
    <div>
<Navbar expand="lg" variant="dark" className="navbar-custom">
   <Container> 

      <Navbar.Brand  href="/"><img src={image} style={{height:50,width:70}}/>
      </Navbar.Brand>
     <Navbar.Brand href="/">AttendenceApp </Navbar.Brand>
     <Navbar.Toggle aria-controls="navbar-nav" />
     <Navbar.Collapse id="navbar-nav">
       <Nav className=" fs-5">
         <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
        
         <Nav.Link><Link to="/signup" className="nav-link" >StudentPortal</Link></Nav.Link>
         <Nav.Link><Link to="/adminsignup" className="nav-link">AdminPortal</Link></Nav.Link>
</Nav>
        
     </Navbar.Collapse>
   </Container>
 </Navbar>
    
    </div>
  )
}

export default Header;
