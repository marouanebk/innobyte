const express = require('express')

// controller functions
const {login,signup} = require('../controllers/authController')

const router = express.Router()

// login route 
router.post('/login', login)
router.post('/signup',signup)



module.exports = router