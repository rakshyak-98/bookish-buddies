const express = require('express')
const adminRouter = express.Router();

const {addTeacher, updateTeacher, deleteTeacher, studentApproval} = require('../controllers/admin_controller.js')



adminRouter.post('/addTeacher', addTeacher );
adminRouter.put('/updateTeacher/:id', updateTeacher);
adminRouter.delete('/deleteTeacher/:id', deleteTeacher);
adminRouter.put('/approveStudent/:id',studentApproval );

module.exports = adminRouter;