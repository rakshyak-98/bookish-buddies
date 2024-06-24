const controller = require("../controllers/teacherController");
const { ensureAccess } = require("../middlewares/auth");
const router = require("express").Router();

router.post("/", ensureAccess(["Admin"]), controller.addTeacher);
router.get("/", controller.getTeacherList);

module.exports = router;

