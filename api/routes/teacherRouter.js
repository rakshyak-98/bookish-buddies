const express = require("express");
const teacherRoute = express.Router();

const {
    addTeacher,
    updateTeacher,
    deleteTeacher,
    getAllTeachers,
} = require("../controllers/adminController.js");
const jwtAuth = require("../middlewares/jwtAuth.js");

teacherRoute.get("/teacher", getAllTeachers);
teacherRoute.post("/teacher", addTeacher);
teacherRoute.put("/teacher", jwtAuth, updateTeacher);
teacherRoute.delete("/teacher/:id", deleteTeacher);

module.exports = teacherRoute;
