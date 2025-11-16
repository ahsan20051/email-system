const express = require("express");
const router = express.Router();

const {
    sendConfirmationEmail,
    sendWelcomeEmail,
    sendResetOTP,
} = require("../controllers/emailController");

// Confirmation
router.post("/send-confirmation", sendConfirmationEmail);

// Welcome Email
router.post("/send-welcome", sendWelcomeEmail);

// OTP
router.post("/send-otp", sendResetOTP);

module.exports = router;
