const controller = require("../controllers/userController");
const router = require("express").Router();

router.post("/signup", controller.signup);
router.post("/sign", controller.signIn);
module.exports = router;

