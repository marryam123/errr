import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="main-section">
        <div className="column1">
          <h1 className="heading">Attendance Portal    </h1>
          <p className="para1">
            An attendance portal page serves as a centralized platform for efficiently managing and tracking attendance-related information within an organization, institution, or event. Its primary objectives include recording attendance, providing real-time monitoring with live dashboards and alerts, and generating comprehensive reports and analytics to identify attendance patterns and trends.
          </p>
        </div>
        <div className="column2">
          <img
            src='https://myciti.in/wp-content/uploads/2021/02/staff-attendance-01.png'
            alt="Attendance"
            className="image1"
          />
        </div>
      </div>
      <div className="card-section">
        <h1 className="section-heading">Select Your Portal</h1>
        <div className="card-container">
          <Card className="custom-card">
            <Card.Body>
           
              <Card.Subtitle className="mb-2 text-muted">Student Attendance Portal</Card.Subtitle>
              <Card.Text>
                Signup, Login, Mark Attendance, View All Attendance
              </Card.Text>
              <Card.Link href="/signup">Student Portal</Card.Link>
            </Card.Body>
          </Card>
          <Card className="custom-card">
            <Card.Body>
              
              <Card.Subtitle className="mb-2 text-muted">Admin Attendance Portal</Card.Subtitle>
              <Card.Text>
                Signup, Login, Dashboard, Show All User Data, Logout
              </Card.Text>
              <Card.Link href="/adminsignup">Admin Portal</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
      <Container>
          <Row>
          <Col className="text-center">
            <p className="mt-3">© 2024 Attendance Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Home;