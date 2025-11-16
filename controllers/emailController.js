const transporter = require("../config/emailConfig");   // ← NEW
require("dotenv").config();

// 1. Confirmation Email
const sendConfirmationEmail = async (req, res) => {
    try {
        const { email, token } = req.body;

        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Confirm Your Email",
            html: `
                <h2>Email Confirmation</h2>
                <p>Click the link to confirm:</p>
                <a href="https://yourapp.com/confirm/${token}">Confirm Email</a>
            `
        });

        res.json({ message: "Confirmation email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
};

// 2. Welcome Email
const sendWelcomeEmail = async (req, res) => {
    try {
        const { email, name } = req.body;

        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome!",
            html: `<h1>Welcome ${name}!</h1>`,
        });

        res.json({ message: "Welcome email sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
};

// 3. Reset OTP Email
const sendResetOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        await transporter.sendMail({
            from: `"Ahsan Email System" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Your Password Reset OTP",
            html: `<h2>Your OTP: <b>${otp}</b></h2>`,
        });

        res.json({ message: "OTP sent" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Email failed" });
    }
};

module.exports = { sendConfirmationEmail, sendWelcomeEmail, sendResetOTP };
