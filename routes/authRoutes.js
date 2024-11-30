const express = require('express')
const {register, login} = require("../controllers/authController");
const router = express.Router();

//register route
router.route('/register').post(register);
//login route
router.route('/login').post(login);

module.exports = router;