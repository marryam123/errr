import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./AllAtten.css";
import { red } from "@mui/material/colors";

const AllAtten = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [message, setMessage] = useState("");
  const totalDays = 30;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const studentId = decodedToken.id;
        fetchAttendance(studentId);
      } catch (error) {
        console.error("Error token:", error);
        setMessage(" Please login again.");
      }
    } else {
      setMessage("Please login to view all attendance.");
    }
  }, []);

  const fetchAttendance = async (studentId) => {
    try {
      const response = await axios.get(
        `${window.location.origin}/at/attendance/${studentId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setAttendanceRecords(response.data.attendanceRecords);
    } catch (e) {
      console.error(e.response.data);
      setMessage("error view all attendence ");
    }
  };
  const daysPresent = attendanceRecords.length;
  const daysAbsent = totalDays - daysPresent;
  return (
    <div>
      <div className="attendance">
        <h1 className="atten-title">Attendance Records</h1>
        {message && <p>{message}</p>}
        <h4 className="atten-para">30 Day Attendance Show</h4>
        <TableContainer className="atten-table" component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-row">
                <TableCell>Date</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Present</TableCell>
                <TableCell>Absent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attendanceRecords.map((record) => (
                <TableRow key={record._id}>
                  <TableCell>
                    {new Date(record.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{record.course}</TableCell>
                  <TableCell> {daysPresent}</TableCell>
                  <TableCell className={"highlightAbsentCell"}>
                    {" "}
                    {daysAbsent}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="result">
        <h6 className="atten-result">
          Total Days Present: {daysPresent}
        </h6>
        <h6 className="atten-result">
          Total Days Absent: {daysAbsent}
          </h6>
          </div>
      </div>
    </div>
  );
};

export default AllAtten;
