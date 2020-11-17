const express = require("express");
const router = express.Router();

const { stampsController } = require("../controller");

router.post("/create", stampsController.createStamps.post);

router.get("/received", stampsController.receivedStamps.get);

router.get("/sent", stampsController.sentStamps.get);

module.exports = router;
