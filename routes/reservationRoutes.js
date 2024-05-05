const router = require("express").Router();
const reservationController = require("../controller/reservationController");

// Create add reservation route
router.post("/", reservationController.addReservation);

module.exports = router;
