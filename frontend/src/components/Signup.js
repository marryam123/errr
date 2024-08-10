import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Signup.css";
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import CardText from "react-bootstrap/esm/CardText";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [sing, setsing] = useState({
    email: "",
    password: "",
    name: "",
    category: "",
  });
  const Singup = async (e) => {
    e.preventDefault();
    if (
      sing.email === "" ||
      sing.password === "" ||
      sing.name === "" ||
      sing.category === ""
    ) {
      alert("All fields are required");
      return;
    }
    try {
      const response = await axios.post(
        `${window.location.origin}/api/signup`,
        sing
      );
      alert("user create");

      setsing({ email: "", password: "", name: "", category: "" });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    navigate("/login");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setsing({ ...sing, [name]: value });
  };
  return (
    <div>
      <div className="main-container">
        <div className="login-container">
          <h1 className="form-title">Sign up</h1>
          <form className="login-form" onSubmit={Singup}>
            <div className="input-wrapper">
              <FaUserAlt className="icon" />
              <input
                type="text"
                placeholder="Username"
                className="input-field"
                required
                name="name"
                value={sing.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <IoMail className="icon" />
              <input
                placeholder="Email Address"
                className="input-field"
                required
                name="email"
                type="text"
                value={sing.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-wrapper">
              <FaLock className="icon" />
              <input
                placeholder="Password"
                className="input-field"
                required
                type="password"
                name="password"
                value={sing.password}
                onChange={handleChange}
              />
            </div>
            <div className="select-container">
              <select
                value={sing.category}
                onChange={handleChange}
                name="category"
              >
                <option value="">Select category</option>
                <option value="WebDevelopment">Web Development</option>
                <option value="GraphicDesign">Graphic Design</option>
                <option value="Ai">Artificial Intelligence</option>
              </select>
            </div>
            <button className="login-button" type="submit">
              Sign up
            </button>
          </form>

          <br />

          <p className="signup-text">
            Already have an account login <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Signup;
