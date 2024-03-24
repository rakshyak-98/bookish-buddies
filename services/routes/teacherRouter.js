const express = require("api/node_modules/@types/express");
const teacherRoute = express.Router();

const {
    addTeacher,
    updateTeacher,
    deleteTeacher,
    getAllTeachers,
} = require("api/controllers/adminController.js");
const jwtAuth = require("api/middlewares/jwtAuth.js");

teacherRoute.get("/teacher", getAllTeachers);
teacherRoute.post("/teacher", addTeacher);
teacherRoute.put("/teacher", jwtAuth, updateTeacher);
teacherRoute.delete("/teacher/:id", deleteTeacher);

module.exports = teacherRoute;
