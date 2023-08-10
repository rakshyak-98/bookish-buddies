const express = require("express");
const adminRouter = express.Router();

const {
    addTeacher,
    updateTeacher,
    deleteTeacher,
    studentApproval,
    getAllTeachers,
} = require("../controllers/admin_controller.js");
const jwtAuth = require("../middlewares/jwtAuth.js");

adminRouter.put("/student/:id", studentApproval);
adminRouter.get("/teacher", getAllTeachers);
adminRouter.post("/teacher", addTeacher);
adminRouter.put("/teacher", jwtAuth, updateTeacher);
adminRouter.delete("/teacher/:id", deleteTeacher);

module.exports = adminRouter;
