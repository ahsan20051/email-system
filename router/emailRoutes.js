const express = require("express");
const router = express.Router();

const {
    sendConfirmationEmail,
    sendWelcomeEmail,
    sendResetOTP,
} = require("../controllers/emailController");

router.post("/send-confirmation", sendConfirmationEmail);

router.post("/send-welcome", sendWelcomeEmail);

router.post("/send-otp", sendResetOTP);

module.exports = router;
