const controller = require("../controllers/slotController");
const router = require("express").Router();

router.post("/", controller.addSlot);

module.exports = router;
