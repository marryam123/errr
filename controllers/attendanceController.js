const Attendance = require('../schema/attendencescema');
const markAttendance = async (req, res) => {
    const { studentId, course, date } = req.body;
    try {
        const newAttendance = new Attendance({ studentId, course, date });
        const savedAttendance = await newAttendance.save();
        res.status(200).send({
            message: "Attendance marked successfully",
            attendance: savedAttendance,
});
    }catch(e){
        console.message(e.message)
        res.status(500).send({
            message: "Failed mark attendance",
            error: e.message,
        });
    }
}
const getAttendanceStudentId = async (req, res) => {
    const { studentId } = req.params;
    try {
        const attendanceRecords = await Attendance.find({ studentId });
        res.status(200).send({
            message: "Attendance records successfully",
            attendanceRecords,
        });
    }catch(e){
        console.error(e.message);
        res.status(500).send({
            message: "Failed attendance records",
            error: e.message,
        });
    }
}
module.exports = {
    markAttendance,
    getAttendanceStudentId
}