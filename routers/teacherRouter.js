const controller = require("../controllers/teacherController");
const router = require('express').Router();

router.post("/", controller.addTeacher)
router.get("/", controller.getTeacher)

module.exports = router;
