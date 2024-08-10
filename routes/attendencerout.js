const { Router } = require("express")
const verifyToken = require('../middleware/verifyToken')
const router = Router();
const { markAttendance ,getAttendanceStudentId} = require("../controllers/attendanceController")
router.post('/markAttendance', verifyToken, markAttendance);
router.get('/attendance/:studentId', verifyToken, getAttendanceStudentId);

module.exports = router;