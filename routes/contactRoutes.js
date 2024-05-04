const router = require("express").Router();
const userController = require("../controller/contactController");

router.post("/create", userController.addContact);

module.exports = router;
