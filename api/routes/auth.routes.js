const express = require('express');
const {signup, signin,  logout, getStudent} = require('../controllers/stud_auth');
const jwtAuth = require('../middlewares/jwtAuth');
const authRouter = express.Router();








authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
authRouter.get('/getStudent', jwtAuth, getStudent);
authRouter.get('/logout', jwtAuth, logout)



module.exports = authRouter;