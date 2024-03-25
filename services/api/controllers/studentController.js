const {RESPONSE_MESSAGE: message} = require("../../constants/message.cjs")
const studentModel = require("../../database/model/studentModel");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

function createStudent(data) {
    const validKey = ["name", "email"];

    for (const key of validKey) {
        if (key in data) continue;
    }

    studentModel.create(data);
}

const signup = async (req, res) => {
    const  validKey = ["email", "password"]

    try {
        if (!(validKey.every(key => key in req.body))) {
            return res.status(400).json({
                success: false,
                message: message["400"],
                error: validKey.filter(key => !(key in req.body))
            });
        }

        const {email, password } = req.body

        const validEmail = emailValidator.validate(email);

        if (!validEmail) {
            return res.status(400).json({
                success: false,
                message: message["400"],
            });
        }

        studentModel.create(req.body);

        return res.status(201).json({
            success: true,
            message: message["201"],
        });
    } catch (error) {
            return res.status(500).json({
                success: false,
                message: message["500"],
                error: error.message
            });
    }
};

const login = async (req, res) => {
    const validKeys = ["email", "password"];
    if (!validKeys.every((key) => key in req.body)) {
        return res.status(400).json({
            message: "Keys are required",
            error: validKeys.filter((key) => !(key in req.body)),
        });
    }

    try {
        const { email, password } = req.body;
        const student = await studentModel
            .findOne({
                email,
            })
            .select("+password");

        if(student == null){
            res.status(404).json({message: message["404"]})
            return
        }

        const token = student.jwtToken();
        student.password = undefined;

        const cookieOptions = {
            maxAge: 24 * 60 * 60 * 1000, //24hr
            httpOnly: true,
        };

        res.cookie("token", token, cookieOptions);
        res.status(200).json({
            success: true,
            message: message["200"],
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Server failed to operate on request",
        });
    }
};

const user = async (req, res) => {
    const studentId = req.student.id;

    try {
        const student = await studentModel.findById(studentId);
        return res.status(200).json({
            success: true,
            data: student,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const logout = (req, res) => {
    try {
        const cookieOptions = {
            expires: new Date(),
            httpOnly: true,
        };
        res.cookie("token", null, cookieOptions);
        res.status(200).json({
            success: true,
            message: "Logged out  successfully",
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = { signup, login, user, logout, createStudent };
