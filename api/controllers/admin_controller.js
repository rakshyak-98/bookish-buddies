const Teacher = require("../model/admin.model.js");
const studentModel = require("../model/student.model.js");
const emailValidator = require("email-validator");
const nodemailer = require("nodemailer");

const addTeacher = async (req, res) => {
    const { name, email, department, subject } = req.body;

    try {
        if (!name || !department || !subject || !email) {
            return res.status(400).json({
                success: false,
                message: "Every field is mandatory",
            });
        }

        var validEmail = emailValidator.validate(email);
        if (!validEmail) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid emailID",
            });
        }

        const ifDuplicate = await Teacher.findOne({ email });
        if (ifDuplicate) {
            return res.status(404).json({
                success: false,
                message: "Teacher already exist",
            });
        }

        const teacherInfo = Teacher(req.body);
        const result = await teacherInfo.save();

        return res.status(200).json({
            success: true,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const updateTeacher = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;

        const teacherId = authHeader.split(" ")[1];

        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            });
        }

        await Teacher.findByIdAndUpdate(teacherId, req.body);
        res.status(200).json({
            success: true,
            message: "Teacher updated successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const teacherId = req.params.id;

        const teacher = await Teacher.findById(teacherId);
        if (!teacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher not found",
            });
        }

        await Teacher.findByIdAndDelete(teacherId);
        res.status(200).json({
            success: true,
            message: "Teacher deleted Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            success: false,
            message: error.message,
        });
    }
};

const studentApproval = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById(studentId);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        student.isApproved = true;
        await student.save();

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
                user: "chet.skiles34@ethereal.email" /* fake email created using ethreal,  we can add  our own id*/,
                pass: "HG4FpyFq6um7B1X85g",
            },
        });

        const mail = {
            from: "<chet.skiles34@ethereal.email>",
            to: student.email,
            subject: "Registration Approved",
            text: "Dear Student, your registration has been approved. You can now access the appointment booking system.",
        };

        await transporter.sendMail(mail);

        return res.status(200).json({
            success: true,
            message: "Student registration approved",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find({});
        res.status(200).json({
            success: true,
            data: teachers,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    addTeacher,
    updateTeacher,
    deleteTeacher,
    studentApproval,
    getAllTeachers,
};
