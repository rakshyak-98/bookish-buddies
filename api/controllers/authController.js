const userModel = require("../model/userModel");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        var validEmail = emailValidator.validate(email);
        if (!validEmail) {
            return res.status(400).json({
                success: false,
                message: "Enter a valid emailID",
            });
        }

        const userInfo = userModel(req.body);
        const result = await userInfo.save();

        return res.status(200).json({
            success: true,
            message: "User signup done",
        });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Account already exists",
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel
            .findOne({
                email,
            })
            .select("+password");

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                success: false,
                message: "Invalid Credentials",
            });
        }

        const token = user.jwtToken();
        user.password = undefined;

        const cookieOptions = {
            maxAge: 24 * 60 * 60 * 1000, //24hr
            httpOnly: true,
        };

        res.cookie("token", token, cookieOptions);
        res.status(200).json({
            success: true,
            message: "Signed in Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server failed to operate on request",
        });
    }
};

const user = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await userModel.findById(userId);
        return res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
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

module.exports = { signup, login, user, logout };
