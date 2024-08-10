import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import "./Adminlogin.css";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const Login = async () => {
    if (sing.email === "" || sing.password === "") {
      alert("All fields are required");
      return;
    }
    try {
      const res = await axios.post(
        `${window.location.origin}/api/adminlogin`,
        sing
      );
      setsing({ email: "", password: "" });
      alert(" Admin login successfully");
      console.log(res);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/admindashbord");
      } else {
        console.error("Token not received");
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        setError(error.response.data.message);
        alert(error.response.data.message);
      } else {
        setError("Please try again");
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsing({ ...sing, [name]: value });
  };

  return (
    <div>
      <div className="main-container">
        <div className="wrapper">
          <h1 className="main-title">Admin Login</h1>
          <div>
            <TextField
              className="input"
              label="Email"
              type="email"
              name="email"
              value={sing.email}
              onChange={handleChange}
              
            />
            <br />
            <br />
            <TextField
              className="input"
              label="Password"
              type="password"
              name="password"
              value={sing.password}
              onChange={handleChange}
              
            />
          </div>
          <br />
          <Button
            className="btn"
            onClick={Login}
            style={{ backgroundColor: "#0056b3", color: "#fff" }}
          >
            Login
          </Button>
          <p className="para">
            Don't have an account? <Link to="/adminSignup">Signup now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;
