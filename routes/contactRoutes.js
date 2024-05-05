const router = require("express").Router();
const userController = require("../controller/contactController");

// Create contact creation route
router.post("/", userController.addContact);

module.exports = router;
