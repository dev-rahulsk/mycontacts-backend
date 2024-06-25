const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  currentUser
} = require("../controllers/userController");
const validatetoken = require("../middleware/validateTokenHandler");

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/current", validatetoken, currentUser)

module.exports = router;