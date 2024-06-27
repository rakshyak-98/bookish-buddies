const controller = require("../controllers/userController");
const router = require("express").Router();

router.post("/signup", controller.signup);
module.exports = router;

