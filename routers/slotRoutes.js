const controller = require("../controllers/slotController");
const { ensureAccess } = require("../middlewares/auth");
const router = require("express").Router();

router.post("/", ensureAccess(["teacher"]), controller.addSlot);
router.get("/", controller.getSlotList);

module.exports = router;

