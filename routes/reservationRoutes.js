const router = require("express").Router();
const reservationController = require("../controller/reservationController");

router.post("/create", reservationController.addReservation);

module.exports = router;
