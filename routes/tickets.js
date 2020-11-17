const express = require("express");
const router = express.Router();

const { ticketsController } = require("../controller");

router.post("/create", ticketsController.createTickets.post);

router.get("/received", ticketsController.receivedTickets.get);

router.get("/sent", ticketsController.sentTickets.get);

module.exports = router;
