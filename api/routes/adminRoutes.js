const express = require("express");
const adminRouter = express.Router();

const {
    addTeacher,
    updateTeacher,
    deleteTeacher,
    studentApproval,
    getAllTeachers,
} = require("../controllers/admin_controller.js");

adminRouter.put("/student/:id", studentApproval);
adminRouter.get("/teacher", getAllTeachers);
adminRouter.post("/teacher", addTeacher);
adminRouter.put("/teacher", updateTeacher);
adminRouter.delete("/teacher/:id", deleteTeacher);

module.exports = adminRouter;
