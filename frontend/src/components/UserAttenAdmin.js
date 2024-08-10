import React, { useState, useEffect } from 'react';
import './AllAtten.css';
import UsersByCategory from './UserbyCategory';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';


const UserAttendance = ({userId}) => {
  const [attendance, setAttendance] = useState([]);

  const [error, setError] = useState(null);
  const totalDays = 30;
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get(`${window.location.origin}/at/attendance/${userId}`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` 
          }
        });
        setAttendance(response.data.attendanceRecords);
       
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Server error');
      }
    };

    fetchAttendance();
  }, [userId]);
  const daysPresent = attendance.length;
  const daysAbsent = totalDays - daysPresent;

  return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>All Attendance Record {userId}</TableCell>
        </TableRow>
        <TableRow>

          <TableCell >Date</TableCell>
          <TableCell>Present</TableCell>
          <TableCell>Absent</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {attendance.map(record => (
            <TableRow key={record._id}>
              <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
              <TableCell> {daysPresent}</TableCell>
              <TableCell className={'highlightAbsentCell'}> {daysAbsent}</TableCell>
            
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default UserAttendance;