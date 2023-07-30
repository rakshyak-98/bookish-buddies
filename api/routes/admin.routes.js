const express = require('express')
const adminRouter = express.Router();

const {addTeacher, updateTeacher, deleteTeacher, studentApproval, getAllTeachers} = require('../controllers/admin_controller.js')



adminRouter.post('/addTeacher', addTeacher );
adminRouter.put('/updateTeacher', updateTeacher);
adminRouter.delete('/deleteTeacher/:id', deleteTeacher);
adminRouter.put('/approveStudent/:id',studentApproval );
adminRouter.get('/teachers', getAllTeachers )

module.exports = adminRouter;